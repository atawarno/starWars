import React, {useEffect, useState} from "react";

const fetchRace = async (url) => {
    const response = await fetch(url);
    return response.json();
}

const RaceBlock = ({url}) => {

    const [race, setRace] = useState(null);
    useEffect(() => {
        fetchRace(url).then(data => setRace(data));
    }, [])

    return(
        <div>{race?.name}</div>
    )

}

export default RaceBlock;