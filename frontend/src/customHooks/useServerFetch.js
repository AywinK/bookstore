import { useState, useEffect, useCallback } from "react";
import { serverLink } from "../siteData/serverLink.json";

const useServerFetch = (urlEndpoint = null, options = null) => { // options for POST request, only fetch if there is a url

    // initial states - no data/error while waiting for response
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // async function implementation of fetching from backend. usecallback prevents re-render loops by stopping recreation of function
    const fetchData = useCallback(async (isMounted) => {
        try {
            const response = await fetch(`${serverLink}${urlEndpoint}`, options && options);
            if (!response.ok && isMounted) setError(`HTTPS error! Status: ${response.status}`);
            const data = await response.json(); // parse body text of request
            isMounted && setData(data);
        } catch (error) {
            isMounted && setError(error);
        } finally {
            isMounted && setLoading(false);
        }
    }, [urlEndpoint, options]);

    const validEndpoint = (typeof urlEndpoint === "string")

    useEffect(() => {
        console.log("rendering with valid endpoint?", validEndpoint);

        let isMounted = true; // flag to prevent race conditions

        validEndpoint && fetchData(isMounted); // invoke fetching from backend endpoint only if it exists

        return () => {
            isMounted = false; // cleanup function when useEffect is unmounted
        };

    }, [validEndpoint, fetchData]);

    return { data, loading, error }; // return states from hook
}

export default useServerFetch;