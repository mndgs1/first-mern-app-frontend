//@ts-nocheck
import { Outlet, Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { useRefreshMutation } from "./authApiSlice";
import usePersist from "../../hooks/usePersist";
import { useSelector } from "react-redux";
import { selectCurrentToken } from "./authSlice";
import { SyncLoader } from "react-spinners";
import Spinner from "@/components/ui/spinner";

const PersistLogin = () => {
    const [persist] = usePersist();
    const token = useSelector(selectCurrentToken);
    const effectRan = useRef(false);

    const [trueSuccess, setTrueSuccess] = useState(false);

    const [refresh, { isUninitialized, isLoading, isSuccess, isError, error }] =
        useRefreshMutation();

    useEffect(() => {
        if (
            effectRan.current === true ||
            import.meta.env.VITE_NODE_ENV !== "development"
        ) {
            // React 18 Strict Mode

            const verifyRefreshToken = async () => {
                try {
                    //const response =
                    await refresh("");
                    //const { accessToken } = response.data
                    setTrueSuccess(true);
                } catch (err) {
                    console.error(err);
                }
            };

            if (!token && persist) verifyRefreshToken();
        }

        return () => {
            effectRan.current = true;
        };

        // eslint-disable-next-line
    }, []);

    let content;
    if (!persist) {
        // persist: no
        content = <Outlet />;
    } else if (isLoading) {
        //persist: yes, token: no
        content = <Spinner />;
    } else if (isError) {
        //persist: yes, token: no
        content = (
            <p className="errmsg">
                {` ${error?.data?.message} - `}
                <Link to="/login">Please login again</Link>.
            </p>
        );
    } else if (isSuccess && trueSuccess) {
        //persist: yes, token: yes
        content = <Outlet />;
    } else if (token && isUninitialized) {
        //persist: yes, token: yes
        content = <Outlet />;
    }

    return content;
};
export default PersistLogin;
