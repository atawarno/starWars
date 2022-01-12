import React, {useEffect, useState} from "react";
import StarWarsService from "../../services/StarWarsService";

const fetchPlanet = new StarWarsService();

const PlanetBlock = ({url}) => {

    const [planet, setPlanet] = useState(null);
    useEffect(() => {
        fetchPlanet.getData(url).then(data => setPlanet(data))
    }, [])

    return (
        <div>{planet?.name}</div>
    )
}

export default PlanetBlock;