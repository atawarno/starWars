import React, {useEffect, useState} from "react";
import StarWarsService from "../../services/StarWarsService";

const fetchCharacter = new StarWarsService();

const CharacterBlock = ({url}) => {

    const [char, setChar] = useState(null);
    useEffect(() => {
        fetchCharacter.getData(url).then(data => setChar(data));
    }, [])

    return(
        <div>{char?.name}</div>
    )

}

export default CharacterBlock;