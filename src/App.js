import {useEffect, useState, useMemo} from "react";
import './App.css';
import Header from "./header";
import {Router, Route, Routes, BrowserRouter} from "react-router-dom";

function App() {
    const [allHouses, setAllHouses] = useState([]);
    useEffect(() => {
        const fetchHouses = async () => {
            const rsp = await fetch('/houses.json');
            const houses = await rsp.json();
            setAllHouses(houses);
        };
        fetchHouses();
    }, []);

    const featuredHouse = useMemo(() => {
        if (allHouses.length) {
            const randomIndex = Math.floor(Math.random() * allHouses.length);
            return allHouses[randomIndex];
        }
    }, [allHouses]);

    return (
        <BrowserRouter>
            <div className="container">
                <Header subtitle='Providing houses all over the Slovakia!'/>

                <Routes>
                    <Route path="/"></Route>
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
