import {useParams} from "react-router-dom";
import House from "./index";

const HouseFromQuery = ({allHouses}) => {
    const {id} = useParams();
    const house = allHouses.find((h) => h.id === parseInt(id));

    if (!house) return (
        <div>
            House not found.
            <pre>Parsed ID: {parseInt(id)}</pre>
            All houses:
            <pre>{JSON.stringify(allHouses, null, 2)}</pre>
        </div>
    )
    return <House house={house}></House>
};
export default HouseFromQuery;