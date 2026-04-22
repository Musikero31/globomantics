import { useEffect, useState } from "react"
import loadingStatus from "../helpers/loadingStatus";

const useHouses = () => {
    const[houses, setHouses] = useState([]);
    const[loadingState, setLoadingState] = useState(loadingStatus.isLoading);

    // Retrieved from an API
    useEffect(() => {
        const fetchHouses = async () => {
            setLoadingState(loadingStatus.isLoading);
            try {
                const response = await fetch("https://localhost:4000/house");
                const houses = await response.json();      
                setHouses(houses);
                setLoadingState(loadingStatus.loaded)
            } catch {
                setLoadingState(loadingStatus.hasError)
            }
        };
        fetchHouses();
    }, []);

    return { houses, setHouses, loadingState }
}

export default useHouses;