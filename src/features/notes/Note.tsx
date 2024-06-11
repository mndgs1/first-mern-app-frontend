import { memo } from "react";
import { TableRow, TableCell } from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { Note } from "@/types";
import { useGetNotesQuery } from "./notesApiSlice";
import useAuth from "@/hooks/useAuth";
import { useGetUsersQuery } from "../users/usersApiSlice";
import EditNoteForm from "./EditNoteFormNew";

import { User } from "@/types";

const NoteTableRow = ({ noteId }: { noteId: string }) => {
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
                    <Badge variant={note.completed ? "success" : "warning"}>
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
