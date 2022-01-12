import React, {useEffect, useState} from "react";

const fetchCharacter = async (url) => {
    const response = await fetch(url);
    return response.json();
}

const CharacterBlock = ({url}) => {

    const [char, setChar] = useState(null);
    useEffect(() => {
        fetchCharacter(url).then(data => setChar(data));
    }, [])

    return(
        <div>{char?.name}</div>
    )

}

export default CharacterBlock;