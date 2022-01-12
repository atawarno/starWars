import React, {useEffect, useState} from "react";

const fetchPlanet = async (url) => {
    const response = await fetch(url);
    return response.json();
}

const PlanetBlock = ({url}) => {

    const [planet, setPlanet] = useState(null);
    useEffect(() => {
        fetchPlanet(url).then(data => setPlanet(data))
    }, [])

    return (
        <div>{planet?.name}</div>
    )
}

export default PlanetBlock;