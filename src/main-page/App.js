import './App.css';
import Header from "./header";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import FeatureHouse from "./feature-house";
import SearchResults from "../search-results";
import HouseFilter from "./house-filter";
import HouseFromQuery from "../house/house-from-query";
import useHouses from "../hooks/use-houses";
import useFeaturedHouse from "../hooks/use-featured-house";

function App() {
    const allHouses = useHouses();
    const featuredHouse = useFeaturedHouse(allHouses);

    return (
        <BrowserRouter>
            <div className="container">
                <Header subtitle='Providing houses all over the Slovakia!'/>
                <HouseFilter allHouses={allHouses}></HouseFilter>
                <Routes>
                    <Route
                        path='/house/:id'
                        element={<HouseFromQuery allHouses={allHouses}></HouseFromQuery>}>
                    </Route>
                    <Route
                        path='/searchresults/:country'
                        element={<SearchResults allHouses={allHouses}></SearchResults>}>
                    </Route>
                    <Route
                        path='/'
                        element={<FeatureHouse house={featuredHouse}></FeatureHouse>}>
                    </Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
