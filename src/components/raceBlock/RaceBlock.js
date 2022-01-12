import React, {useEffect, useState} from "react";
import StarWarsService from "../../services/StarWarsService";

const fetchRace = new StarWarsService();

const RaceBlock = ({url}) => {

    const [race, setRace] = useState(null);
    useEffect(() => {
        fetchRace.getData(url).then(data => setRace(data));
    }, [])

    return(
        <div>{race?.name}</div>
    )

}

export default RaceBlock;