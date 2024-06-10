import { useGetNotesQuery } from "./notesApiSlice";
import Note from "./Note";
import useAuth from "../../hooks/useAuth";
import { SyncLoader } from "react-spinners";
import useTitle from "../../hooks/useTitle";
import { P } from "@/components/typography/Paragraph";

const NotesList = () => {
    useTitle("Notes | Dan D. Repairs");

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

    const { username, isManager, isAdmin } = useAuth();

    let content;

    if (isLoading) content = <SyncLoader />;

    if (isError) {
        console.log(error);
        content = <P variant="destructive">Oops something went wrong!</P>;
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
        }
        const tableContent =
            filteredIds?.length &&
            filteredIds.map((noteId: string) => (
                <Note key={noteId} noteId={noteId} />
            ));

        content = (
            <table className="table table--notes">
                <thead className="table__thead">
                    <tr>
                        <th scope="col" className="table__th note__status">
                            Status
                        </th>
                        <th scope="col" className="table__th note__created">
                            Created
                        </th>
                        <th scope="col" className="table__th note__updated">
                            Updated
                        </th>
                        <th scope="col" className="table__th note__title">
                            Title
                        </th>
                        <th scope="col" className="table__th note__username">
                            Owner
                        </th>
                        <th scope="col" className="table__th note__edit">
                            Edit
                        </th>
                    </tr>
                </thead>
                <tbody>{tableContent}</tbody>
            </table>
        );
    }

    return content;
};
export default NotesList;
