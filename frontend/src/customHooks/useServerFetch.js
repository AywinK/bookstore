import { useState, useEffect } from "react";

const useServerFetch = (urlEndpoint, options = null) => { // options for POST request

    // initial states - no data/error while waiting for response
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        let isMounted = true; // flag to prevent race conditions

        // async function implementation of fetching from backend
        const fetchData = async () => {
            try {
                const response = await fetch(`http://192.168.1.65:3001/${urlEndpoint}`, options && options);
                if (!response.okv && isMounted) setError(`HTTPS error! Status: ${response.status}`);
                const data = await response.json(); // parse body text of request
                isMounted && setData(data);
            } catch (error) {
                isMounted && setError(error);
            } finally {
                isMounted && setLoading(false);
            }
        };

        fetchData(); // invoke fetching from backend endpoint

        return () => {
            isMounted = false; // cleanup function when useEffect is unmounted
        };

    }, [urlEndpoint, options]);

    return { data, loading, error }; // return states from hook
}

export default useServerFetch;