import { useState, useEffect } from "react";

const usePersist = () => {
    const persistedValue = localStorage.getItem("persist");
    const initialPersist = persistedValue ? JSON.parse(persistedValue) : false;
    const [persist, setPersist] = useState<string | boolean>(initialPersist);

    useEffect(() => {
        localStorage.setItem("persist", JSON.stringify(persist));
    }, [persist]);

    return [persist, setPersist] as const;
};

export default usePersist;
