import { useGetUsersQuery } from "./usersApiSlice";
// import { memo } from "react";
import useAuth from "@/hooks/useAuth";
import { TableRow, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { User } from "@/types";
import EditUserFormNew from "./EditUserFormNew";

const UserTableRow = ({ userId }: { userId: string }) => {
    const { isManager, isAdmin } = useAuth();
    const { user }: { user: User } = useGetUsersQuery("usersList", {
        selectFromResult: ({ data }) => ({
            user: data.entities[userId],
        }),
    });

    if (user) {
        return (
            <TableRow key={user.id}>
                <TableCell>{`${user.firstName} ${user.lastName}`}</TableCell>
                <TableCell>{user.email}</TableCell>
                <TableCell>{user.username}</TableCell>
                <TableCell>
                    <Badge
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                            !user.active
                                ? "bg-gray-100 text-gray-800"
                                : user.roles.includes("Manager")
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                                : user.roles.includes("Employee")
                                ? "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-100"
                                : "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100"
                        }`}>
                        {user.active
                            ? user.roles[user.roles.length - 1]
                            : "Inactive"}
                    </Badge>
                </TableCell>
                {(isManager || isAdmin) && (
                    <TableCell className="max-w-24">
                        <EditUserFormNew user={user} />
                    </TableCell>
                )}
            </TableRow>
        );
    } else return null;
};
// const memoizedUser = memo(UserTableRow);

export default UserTableRow;
