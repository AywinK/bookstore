import CategoryBox from "../components/CategoryBox";
import { CircularProgress } from "@mui/material";
import useServerFetch from "../customHooks/useServerFetch";

const Collections = () => {

    const { data, loading, error } = useServerFetch("categories");

    if (loading) return <CircularProgress />

    if (error) return <>{error}<p>Please try again</p></>

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
                data.map(({ category_name }) => <CategoryBox key={category_name} categoryLink={`${category_name}`} categoryName={category_name} />)

            }
        </div>
    )
}

export default Collections;