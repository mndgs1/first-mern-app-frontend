const filterObject = (array: object[], search: string) => {
    if (!search) {
        return array;
    }

    const searchLower = search.toLowerCase();

    return array.filter((item) => {
        return Object.values(item).some((value) =>
            value.toString().toLowerCase().includes(searchLower)
        );
    });
};

export default filterObject;
