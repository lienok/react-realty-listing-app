import {useMemo} from "react";


const useFeatureHouse = (allHouses) => {
    return useMemo(() => {
        if (allHouses.length) {
            const randomIndex = Math.floor(Math.random() * allHouses.length);
            return allHouses[randomIndex];
        }
    }, [allHouses]);
};

export default useFeatureHouse;