import { useState } from "react";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
    DropdownMenuRadioItem,
} from "@/components/ui/dropdown-menu";
import {
    Table,
    TableHeader,
    TableHead,
    TableBody,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";

import { useGetUsersQuery } from "./usersApiSlice";
import { ArrowUpDownIcon } from "lucide-react";
import useTitle from "@/hooks/useTitle";
import UserTableRow from "./UserNew";
import Spinner from "@/components/ui/spinner";
import { useNavigate } from "react-router-dom";

import useAuth from "@/hooks/useAuth";
const UsersListNew = () => {
    useTitle("Users | Dan D. Repairs");
    const { isManager, isAdmin } = useAuth();
    const navigate = useNavigate();
    const [sortColumn, setSortColumn] = useState({
        key: "name",
        order: "asc",
    });
    const [search, setSearch] = useState("");

    let content;

    const {
        data: users,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetUsersQuery("usersList", {
        pollingInterval: 60000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true,
    });

    const handleAddUser = () => {
        navigate("/dash/users/new");
    };

    if (isLoading) {
        content = <Spinner />;
    }
    if (isSuccess) {
        const { ids } = users;
        console.log(users);
        const tableContent =
            ids?.length &&
            ids.map((userId: string) => (
                <UserTableRow key={userId} userId={userId} />
            ));
        const handleSort = (key) => {
            if (sortColumn.key === key) {
                setSortColumn({
                    key,
                    order: sortColumn.order === "asc" ? "desc" : "asc",
                });
            } else {
                setSortColumn({ key, order: "asc" });
            }
        };

        content = (
            <div className="p-6 space-y-6">
                <div className="flex items-center justify-between">
                    <h1 className="text-2xl font-bold">Users</h1>
                    <div className="flex items-center gap-4">
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" className="shrink-0">
                                    <ArrowUpDownIcon className="w-4 h-4 mr-2" />
                                    Sort by
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent
                                className="w-[200px]"
                                align="end">
                                <DropdownMenuRadioGroup value={sortColumn.key}>
                                    <DropdownMenuRadioItem value="name">
                                        Name
                                    </DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="email">
                                        Email
                                    </DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="username">
                                        Username
                                    </DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem value="role">
                                        Role
                                    </DropdownMenuRadioItem>
                                </DropdownMenuRadioGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <Button size="sm" onClick={handleAddUser}>
                            Add User
                        </Button>
                    </div>
                </div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead
                                className="cursor-pointer"
                                onClick={() => handleSort("name")}>
                                Name
                                {sortColumn.key === "name" && (
                                    <span className="ml-1">
                                        {sortColumn.order === "asc"
                                            ? "\u2191"
                                            : "\u2193"}
                                    </span>
                                )}
                            </TableHead>
                            <TableHead
                                className="cursor-pointer"
                                onClick={() => handleSort("email")}>
                                Email
                                {sortColumn.key === "email" && (
                                    <span className="ml-1">
                                        {sortColumn.order === "asc"
                                            ? "\u2191"
                                            : "\u2193"}
                                    </span>
                                )}
                            </TableHead>
                            <TableHead
                                className="cursor-pointer"
                                onClick={() => handleSort("username")}>
                                Username
                                {sortColumn.key === "username" && (
                                    <span className="ml-1">
                                        {sortColumn.order === "asc"
                                            ? "\u2191"
                                            : "\u2193"}
                                    </span>
                                )}
                            </TableHead>
                            <TableHead
                                className="cursor-pointer"
                                onClick={() => handleSort("role")}>
                                Role
                                {sortColumn.key === "role" && (
                                    <span className="ml-1">
                                        {sortColumn.order === "asc"
                                            ? "\u2191"
                                            : "\u2193"}
                                    </span>
                                )}
                            </TableHead>
                            {(isAdmin || isManager) && (
                                <TableHead>Edit</TableHead>
                            )}
                        </TableRow>
                    </TableHeader>
                    <TableBody>{tableContent}</TableBody>
                </Table>
            </div>
        );
    }
    return content;
};

export default UsersListNew;
