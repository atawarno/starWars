import {useEffect, useState} from "react";

const fetchStarship = async (url) => {
    const response = await fetch(url);
    return response.json()
}

const StarshipBlock =  ({url}) => {
    const [starship, setStarship] = useState(null);

    useEffect(() => {
        fetchStarship(url).then(data => setStarship(data));
    }, [])

    return(
        <div>{starship?.name}</div>
    )
}

export default StarshipBlock