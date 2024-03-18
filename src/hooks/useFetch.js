import { useEffect, useState } from "react";

export function useFetch(url, options = {}) {
    const [data, setData] = useState([]);
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(true);

    const fetchData = async (newUrl) => {
        try {
            const response = await fetch(newUrl ?? url, options);
            const result = await response.json();
            setData(result);
        } catch (error) {
            console.error(error);
            setError(error?.message);
            setLoading(false);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return { data, error, loading, refetch: fetchData };
}