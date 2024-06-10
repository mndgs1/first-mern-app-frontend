import { useParams } from "react-router-dom";
import EditUserForm from "./EditUserForm";
import { useGetUsersQuery } from "./usersApiSlice";
import { User } from "@/types";
import { Loader } from "lucide-react";

const EditUser = () => {
    const { id } = useParams();

    const { user } = useGetUsersQuery("usersList", {
        selectFromResult: ({ data }) => ({
            user: data?.entities[id as string] as User | undefined,
        }),
    });

    if (!user) {
        return <Loader />;
    }

    const content = <EditUserForm user={user} />;

    return content;
};

export default EditUser;
