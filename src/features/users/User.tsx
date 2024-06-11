import { useGetUsersQuery } from "./usersApiSlice";
import { memo } from "react";
import useAuth from "@/hooks/useAuth";
import { TableRow, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { User } from "@/types";
import EditUserFormNew from "./EditUserForm";

type UserTableRow = {
    userId: string;
};

const UserTableRow = ({ userId }: UserTableRow) => {
    const { isManager, isAdmin } = useAuth();
    const { user } = useGetUsersQuery("usersList", {
        selectFromResult: ({ data }) => ({
            user: data?.entities[userId] as User | undefined,
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
                        variant={
                            user.active
                                ? user.roles.includes("Admin")
                                    ? "destructive"
                                    : user.roles.includes("Manager")
                                    ? "success"
                                    : user.roles.includes("Employee")
                                    ? "warning"
                                    : "secondary"
                                : "outline"
                        }>
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
const memoizedUser = memo(UserTableRow);

export default memoizedUser;
