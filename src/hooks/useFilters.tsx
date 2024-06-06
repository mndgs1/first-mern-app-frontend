import { useMemo } from "react";

type SortColumn = {
    key: string;
    order: "asc" | "desc";
};

type AnyObject = {
    [key: string]: any;
};

const useFilteredAndSorted = <T extends AnyObject>(
    array: T[],
    search: string,
    sortColumn: SortColumn,
    keys: string[]
): T[] => {
    return useMemo(() => {
        const searchLower = search.toLowerCase();

        const filteredArray = array.filter((object) => {
            return keys.some(
                (key) =>
                    object[key] &&
                    typeof object[key] === "string" &&
                    object[key].toLowerCase().includes(searchLower)
            );
        });

        const sortedArray = filteredArray.sort((a, b) => {
            if (sortColumn.order === "asc") {
                return a[sortColumn.key] > b[sortColumn.key] ? 1 : -1;
            } else {
                return a[sortColumn.key] < b[sortColumn.key] ? 1 : -1;
            }
        });

        return sortedArray;
    }, [array, search, sortColumn, keys]);
};

export default useFilteredAndSorted;
