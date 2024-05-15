import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials } from "../../features/auth/authSlice";
import { RootState } from "../store";
import { BaseQueryFn } from "@reduxjs/toolkit/query/react";

interface RefreshResultData {
    message: string;
    // Add other properties if needed
}

interface RefreshSuccessResponse {
    data: RefreshResultData;
}

interface RefreshErrorResponse {
    error: {
        status: number;
        data: {
            message: string;
        };
    };
}

type RefreshResult = RefreshSuccessResponse | RefreshErrorResponse;

const baseQuery = fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    credentials: "include",
    prepareHeaders: (headers, { getState }) => {
        const token = (getState() as RootState).auth.token;

        if (token) {
            headers.set("authorization", `Bearer ${token}`);
        }
        return headers;
    },
});

const baseQueryWithReauth: BaseQueryFn = async (args, api, extraOptions) => {
    let result = await baseQuery(args, api, extraOptions);

    // if you want, handle other status codes, too
    if (result?.error?.status === 403) {
        // send refresh token to get new access token
        const refreshResult = (await baseQuery(
            "/auth/refresh",
            api,
            extraOptions
        )) as RefreshResult;

        if ("data" in refreshResult) {
            // store the new token
            api.dispatch(setCredentials({ ...refreshResult.data }));

            // retry original query with new access token
            result = await baseQuery(args, api, extraOptions);
        } else {
            if (refreshResult?.error?.status === 403) {
                refreshResult.error.data.message = "Your login has expired.";
            }
            return refreshResult;
        }
    }
    return result;
};

export const apiSlice = createApi({
    baseQuery: baseQueryWithReauth,
    tagTypes: ["Note", "User"],
    endpoints: () => ({}),
});
