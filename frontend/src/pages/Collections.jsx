import { useEffect, useState } from "react";
import CategoryBox from "../components/CategoryBox";
import { CircularProgress } from "@mui/material";


const Collections = () => {

    const [collectionData, setCollectionData] = useState(null);

    useEffect(() => {
        fetch("http://localhost:3001/categories")
            .then(res => res.json())
            .then(data => setCollectionData(data));
    }, [])

    return (
        <div
            style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "space-evenly"
            }}
        >
            {
                collectionData
                    ?
                    collectionData.map(({ category_name }) => <CategoryBox key={category_name} categoryLink={`${category_name}`} categoryName={category_name} />)
                    :
                    <CircularProgress />
            }
        </div>
    )
}

export default Collections;