type SortColumn = {
    key: string;
    order: string;
};

type AnyObject = {
    [key: string]: any;
};

const sortObjects = <T extends AnyObject>(
    array: { [key: string]: T },
    sortColumn: SortColumn
): T[] => {
    const sortedArray = Object.values(array).sort((a, b) => {
        const aValue = a[sortColumn.key];
        const bValue = b[sortColumn.key];

        if (sortColumn.order === "asc") {
            return aValue > bValue ? 1 : -1;
        } else {
            return aValue < bValue ? 1 : -1;
        }
    });

    return sortedArray;
};

export default sortObjects;
