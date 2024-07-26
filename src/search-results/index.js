import {useParams} from "react-router-dom";
import SearchResultsRow from "./search-results-row";
import {useContext} from "react";
import HousesContext from "../context/houses-context";

const SearchResults = () => {
    const {country} = useParams();
    const allHouses = useContext(HousesContext);
    const filteredHouses = allHouses.filter((house) => house.country === country);

    return (
        <div className="mt-2">
            <h4>Result for {country}:</h4>
            <table className='table table-hover'>
                <tbody>
                {filteredHouses.map((h) => (
                    <SearchResultsRow key={h.id} house={h}/>
                ))}
                </tbody>
            </table>
        </div>
    );
};


export default SearchResults;