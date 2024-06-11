// import { useGetNotesQuery } from "./notesApiSlice";
import { memo } from "react";
import { TableRow, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Note } from "@/types";
import { useGetNotesQuery } from "./notesApiSlice";
import useAuth from "@/hooks/useAuth";
import { useGetUsersQuery } from "../users/usersApiSlice";
import EditNoteForm from "./EditNoteFormNew";
type NoteTableRow = {
    noteId: string;
};
import { User } from "@/types";

const NoteTableRow = ({ noteId }: NoteTableRow) => {
    const { isAdmin, isManager } = useAuth();
    const { note }: { note: Note } = useGetNotesQuery("notesList", {
        selectFromResult: ({ data }) => ({
            note: data.entities[noteId],
        }),
    });

    const { user } = useGetUsersQuery("usersList", {
        selectFromResult: ({ data }) => ({
            user: data?.entities[note.user] as User | undefined,
        }),
    });

    if (note) {
        const created = new Date(note.createdAt).toLocaleString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });

        const updated = new Date(note.updatedAt).toLocaleString("en-US", {
            day: "numeric",
            month: "long",
            year: "numeric",
        });

        return (
            <TableRow key={note.id}>
                <TableCell>{note.ticket}</TableCell>
                {(isAdmin || isManager) && (
                    <TableCell>{`${user?.firstName} ${user?.lastName}`}</TableCell>
                )}
                <TableCell>{note.title}</TableCell>
                <TableCell>{note.text}</TableCell>
                <TableCell>{note.client}</TableCell>
                <TableCell>{created}</TableCell>
                <TableCell>{updated}</TableCell>
                <TableCell>
                    <Badge
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                            note.completed
                                ? "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100"
                                : "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100"
                        }`}>
                        {note.completed ? "Completed" : "Assigned"}
                    </Badge>
                </TableCell>
                <TableCell className="max-w-24">
                    <EditNoteForm note={note} />
                </TableCell>
            </TableRow>
        );
    } else return null;
};
const memoizedNote = memo(NoteTableRow);

export default memoizedNote;
