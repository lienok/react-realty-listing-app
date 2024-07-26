import './App.css';
import Header from "./header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import FeatureHouse from "./feature-house";
import SearchResults from "../search-results";
import HouseFilter from "./house-filter";
import HouseFromQuery from "../house/house-from-query";
import useHouses from "../hooks/use-houses";
import useFeaturedHouse from "../hooks/use-featured-house";
import HousesContext from "../context/houses-context";

function App() {
    const allHouses = useHouses();
    const featuredHouse = useFeaturedHouse(allHouses);

    return (
        <BrowserRouter>
            <HousesContext.Provider value={allHouses}>
            <div className="container">
                <Header subtitle='Providing houses all over the Slovakia!'/>
                <HouseFilter/>
                <Routes>
                    <Route
                        path='/house/:id'
                        element={<HouseFromQuery/>}>
                    </Route>
                    <Route
                        path='/searchresults/:country'
                        element={<SearchResults/>}>
                    </Route>
                    <Route
                        path='/'
                        element={<FeatureHouse house={featuredHouse}></FeatureHouse>}>
                    </Route>
                </Routes>
            </div>
            </HousesContext.Provider>
        </BrowserRouter>
    );
}

export default App;
