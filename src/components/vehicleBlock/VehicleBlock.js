import {useEffect, useState} from "react";

const fetchVehicle = async (url) => {
    const response = await fetch(url);
    return response.json();
}

const VehicleBlock = ({url}) => {
    const [vehicle, setVehicle] = useState(null);
    useEffect(() => {
        fetchVehicle(url).then(data => setVehicle(data));
    }, [])

        return(
            <div>{vehicle?.name}</div>
        )
}

export default VehicleBlock;