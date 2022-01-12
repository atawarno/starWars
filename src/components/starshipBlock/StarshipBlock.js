import {useEffect, useState} from "react";
import StarWarsService from "../../services/StarWarsService";

const fetchStarship = new StarWarsService();

const StarshipBlock =  ({url}) => {
    const [starship, setStarship] = useState(null);

    useEffect(() => {
        fetchStarship.getData(url).then(data => setStarship(data));
    }, [])

    return(
        <div>{starship?.name}</div>
    )
}

export default StarshipBlock