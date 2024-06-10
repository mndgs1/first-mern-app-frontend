import { useState } from "react";
import { useGetNotesQuery } from "./notesApiSlice";
import useAuth from "../../hooks/useAuth";
import useTitle from "../../hooks/useTitle";
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
import Spinner from "@/components/ui/spinner";
import { ArrowUpDownIcon, SearchIcon } from "lucide-react";
import sortObjects from "@/helpers/sortObjects";
import filterObjects from "@/helpers/filterObjects";
import { Note } from "@/types";
import { P } from "@/components/typography/Paragraph";
import NoteTableRow from "./NoteNew";

const NotesList = () => {
    useTitle("Notes | Dan D. Repairs");
    const { username, isManager, isAdmin } = useAuth();

    const {
        data: notes,
        isLoading,
        isSuccess,
        isError,
        error,
    } = useGetNotesQuery("notesList", {
        pollingInterval: 15000,
        refetchOnFocus: true,
        refetchOnMountOrArgChange: true,
    });

    let content;

    const [sortColumn, setSortColumn] = useState({
        key: "name",
        order: "asc",
    });
    const [search, setSearch] = useState("");

    if (isLoading) {
        content = <Spinner />;
    }

    if (isError) {
        console.log(error);
        content = <P variant={"destructive"}>Oops Something went wrong!</P>;
    }
    if (isSuccess) {
        const { ids, entities } = notes;

        let filteredIds;

        if (isManager || isAdmin) {
            filteredIds = [...ids];
        } else {
            filteredIds = ids.filter(
                (noteId: string) => entities[noteId].username === username
            );
            console.log(filteredIds);
        }

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
        const sortedNotes: Note[] = sortObjects(entities, sortColumn);

        const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
            setSearch(e.target.value);
        };
        const searchedAndSortedNotes =
            (filterObjects(sortedNotes, search) as Note[]) || [];

        const tableContent =
            searchedAndSortedNotes.length > 0 &&
            searchedAndSortedNotes.map((note: Note) => (
                <NoteTableRow key={note.id} noteId={note.id} />
            ));

        content = (
            <div className="p-6 space-y-6">
                <div className="flex flex-col md:flex-row md:items-center gap-6 justify-between">
                    <h1 className="text-2xl font-bold">Notes</h1>
                    <div className="flex items-center gap-4">
                        <div className="relative">
                            <SearchIcon className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500 dark:text-gray-400" />
                            <Input
                                type="search"
                                placeholder="Search notes..."
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
                                        value="ticket"
                                        onClick={() => handleSort("ticket")}>
                                        Ticket
                                        {sortColumn.key === "ticket" && (
                                            <span className="ml-1">
                                                {sortColumn.order === "asc"
                                                    ? "\u2191"
                                                    : "\u2193"}
                                            </span>
                                        )}
                                    </DropdownMenuRadioItem>
                                    {(isManager || isAdmin) && (
                                        <DropdownMenuRadioItem
                                            value="firstName"
                                            onClick={() =>
                                                handleSort("firstName")
                                            }>
                                            Assigned to
                                            {sortColumn.key === "firstName" && (
                                                <span className="ml-1">
                                                    {sortColumn.order === "asc"
                                                        ? "\u2191"
                                                        : "\u2193"}
                                                </span>
                                            )}
                                        </DropdownMenuRadioItem>
                                    )}
                                    <DropdownMenuRadioItem
                                        value="title"
                                        onClick={() => handleSort("title")}>
                                        Title{" "}
                                        {sortColumn.key === "title" && (
                                            <span className="ml-1">
                                                {sortColumn.order === "asc"
                                                    ? "\u2191"
                                                    : "\u2193"}
                                            </span>
                                        )}
                                    </DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem
                                        value="text"
                                        onClick={() => handleSort("text")}>
                                        Description{" "}
                                        {sortColumn.key === "text" && (
                                            <span className="ml-1">
                                                {sortColumn.order === "asc"
                                                    ? "\u2191"
                                                    : "\u2193"}
                                            </span>
                                        )}
                                    </DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem
                                        value="client"
                                        onClick={() => handleSort("client")}>
                                        Client{" "}
                                        {sortColumn.key === "client" && (
                                            <span className="ml-1">
                                                {sortColumn.order === "asc"
                                                    ? "\u2191"
                                                    : "\u2193"}
                                            </span>
                                        )}
                                    </DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem
                                        value="createdAt"
                                        onClick={() => handleSort("createdAt")}>
                                        Registered{" "}
                                        {sortColumn.key === "createdAt" && (
                                            <span className="ml-1">
                                                {sortColumn.order === "asc"
                                                    ? "\u2191"
                                                    : "\u2193"}
                                            </span>
                                        )}
                                    </DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem
                                        value="updatedAt"
                                        onClick={() => handleSort("updatedAt")}>
                                        Updated
                                        {sortColumn.key === "updatedAt" && (
                                            <span className="ml-1">
                                                {sortColumn.order === "asc"
                                                    ? "\u2191"
                                                    : "\u2193"}
                                            </span>
                                        )}
                                    </DropdownMenuRadioItem>
                                    <DropdownMenuRadioItem
                                        value="completed"
                                        onClick={() => handleSort("completed")}>
                                        Status{" "}
                                        {sortColumn.key === "completed" && (
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
                        {/* <NewNoteForm /> */}
                    </div>
                </div>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead
                                className="cursor-pointer"
                                onClick={() => handleSort("ticket")}>
                                Ticket
                                {sortColumn.key === "ticket" && (
                                    <span className="ml-1">
                                        {sortColumn.order === "asc"
                                            ? "\u2191"
                                            : "\u2193"}
                                    </span>
                                )}
                            </TableHead>
                            {(isAdmin || isManager) && (
                                <TableHead
                                    className="cursor-pointer"
                                    onClick={() => handleSort("firstName")}>
                                    Assigned to
                                    {sortColumn.key === "firstName" && (
                                        <span className="ml-1">
                                            {sortColumn.order === "asc"
                                                ? "\u2191"
                                                : "\u2193"}
                                        </span>
                                    )}
                                </TableHead>
                            )}
                            <TableHead
                                className="cursor-pointer"
                                onClick={() => handleSort("title")}>
                                Title
                                {sortColumn.key === "title" && (
                                    <span className="ml-1">
                                        {sortColumn.order === "asc"
                                            ? "\u2191"
                                            : "\u2193"}
                                    </span>
                                )}
                            </TableHead>
                            <TableHead
                                className="cursor-pointer"
                                onClick={() => handleSort("text")}>
                                Description
                                {sortColumn.key === "text" && (
                                    <span className="ml-1">
                                        {sortColumn.order === "asc"
                                            ? "\u2191"
                                            : "\u2193"}
                                    </span>
                                )}
                            </TableHead>
                            <TableHead
                                className="cursor-pointer"
                                onClick={() => handleSort("client")}>
                                Client
                                {sortColumn.key === "client" && (
                                    <span className="ml-1">
                                        {sortColumn.order === "asc"
                                            ? "\u2191"
                                            : "\u2193"}
                                    </span>
                                )}
                            </TableHead>
                            <TableHead
                                className="cursor-pointer"
                                onClick={() => handleSort("createdAt")}>
                                Registered
                                {sortColumn.key === "createdAt" && (
                                    <span className="ml-1">
                                        {sortColumn.order === "asc"
                                            ? "\u2191"
                                            : "\u2193"}
                                    </span>
                                )}
                            </TableHead>
                            <TableHead
                                className="cursor-pointer"
                                onClick={() => handleSort("updatedAt")}>
                                Updated
                                {sortColumn.key === "updatedAt" && (
                                    <span className="ml-1">
                                        {sortColumn.order === "asc"
                                            ? "\u2191"
                                            : "\u2193"}
                                    </span>
                                )}
                            </TableHead>
                            <TableHead
                                className="cursor-pointer"
                                onClick={() => handleSort("completed")}>
                                Status
                                {sortColumn.key === "completed" && (
                                    <span className="ml-1">
                                        {sortColumn.order === "asc"
                                            ? "\u2191"
                                            : "\u2193"}
                                    </span>
                                )}
                            </TableHead>
                            <TableHead>Edit</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>{tableContent}</TableBody>
                </Table>
            </div>
        );
    }
    return content;
};
export default NotesList;
