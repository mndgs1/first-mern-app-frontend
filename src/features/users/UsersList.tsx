import { useState } from "react";
import {
    DropdownMenu,
    DropdownMenuTrigger,
    DropdownMenuRadioItem,
    DropdownMenuContent,
    DropdownMenuRadioGroup,
} from "@/components/ui/dropdown-menu";
import {
    Table,
    TableHeader,
    TableHead,
    TableBody,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { useGetUsersQuery } from "./usersApiSlice";
import { ArrowUpDownIcon, SearchIcon } from "lucide-react";
import useTitle from "@/hooks/useTitle";
import UserTableRow from "./User";
import Spinner from "@/components/ui/spinner";
import NewUserForm from "./NewUserForm";

import useAuth from "@/hooks/useAuth";
import { User } from "@/types";
import sortObjects from "@/helpers/sortObjects";
import filterObjects from "@/helpers/filterObjects";

const UsersListNew = () => {
    useTitle("Users | Dan D. Repairs");
    const { isManager, isAdmin } = useAuth();
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
    } = useGetUsersQuery("usersList", {
        pollingInterval: 60000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true,
    });

    if (isLoading) {
        content = <Spinner />;
    }

    if (isError) {
        content = <div>Oops something went wrong!</div>;
    }
    if (isSuccess) {
        const { entities } = users;

        const handleSort = (key: string) => {
            if (sortColumn.key === key) {
                setSortColumn({
                    key,
                    order: sortColumn.order === "asc" ? "desc" : "asc",
                });
            } else {
                setSortColumn({ key, order: "asc" });
            }
        };
        const sortedUsers: User[] = sortObjects(entities, sortColumn);

        const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
            setSearch(e.target.value);
        };
        const searchedAndSortedUsers =
            (filterObjects(sortedUsers, search) as User[]) || [];

        console.log(searchedAndSortedUsers);

        const tableContent =
            searchedAndSortedUsers.length &&
            searchedAndSortedUsers.map((user: User) => (
                <UserTableRow key={user.id} userId={user.id} />
            ));

        content = (
            <div className="p-6 space-y-6">
                <div className="flex flex-col md:flex-row md:items-center gap-6 justify-between">
                    <h1 className="text-2xl font-bold">Users</h1>
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                            <Input
                                type="search"
                                placeholder="Search users..."
                                className="pl-8 pr-4 py-2 rounded-md bg-white dark:bg-gray-950"
                                value={search}
                                onChange={handleSearch}
                            />
                        </div>
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
                                    <DropdownMenuRadioItem
                                        value="firstName"
                                        onClick={() => handleSort("firstName")}>
                                        Name
                                        {sortColumn.key === "firstName" && (
                                            <span className="ml-1">
                                                {sortColumn.order === "asc"
                                                    ? "\u2191"
                                                    : "\u2193"}
                                            </span>
                                        )}
                                    </DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem
                                        value="email"
                                        onClick={() => handleSort("email")}>
                                        Email{" "}
                                        {sortColumn.key === "email" && (
                                            <span className="ml-1">
                                                {sortColumn.order === "asc"
                                                    ? "\u2191"
                                                    : "\u2193"}
                                            </span>
                                        )}
                                    </DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem
                                        value="username"
                                        onClick={() => handleSort("username")}>
                                        Username{" "}
                                        {sortColumn.key === "username" && (
                                            <span className="ml-1">
                                                {sortColumn.order === "asc"
                                                    ? "\u2191"
                                                    : "\u2193"}
                                            </span>
                                        )}
                                    </DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem
                                        value="role"
                                        onClick={() => handleSort("role")}>
                                        Role{" "}
                                        {sortColumn.key === "role" && (
                                            <span className="ml-1">
                                                {sortColumn.order === "asc"
                                                    ? "\u2191"
                                                    : "\u2193"}
                                            </span>
                                        )}
                                    </DropdownMenuRadioItem>
                                </DropdownMenuRadioGroup>
                            </DropdownMenuContent>
                        </DropdownMenu>
                        <NewUserForm />
                    </div>
                </div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead
                                className="cursor-pointer"
                                onClick={() => handleSort("firstName")}>
                                Name
                                {sortColumn.key === "firstName" && (
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
