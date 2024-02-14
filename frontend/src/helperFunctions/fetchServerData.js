import { serverLink } from "../siteData/serverLink.json"

const fetchServerData = async (urlEndpoint, options = null) => {
    if (typeof urlEndpoint === "string") {
        try {
            const response = await fetch(`${serverLink}${urlEndpoint}}`, options && options);
            if (response.ok) {
                const data = await response.json();
                console.log(data)
                return data
            } else return { error: `HTTPS error: Status ${response.status}` }
        } catch (err) {
            console.error("error fetching data", err);
            return { error: err };
        }
    } else {
        console.log("urlEndpoint is not a string. Typeof ===", typeof urlEndpoint)
    }
}

export default fetchServerData;