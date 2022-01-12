import {useEffect, useState} from "react";
import StarWarsService from "../../services/StarWarsService";

const fetchVehicle = new StarWarsService();

const VehicleBlock = ({url}) => {
    const [vehicle, setVehicle] = useState(null);
    useEffect(() => {
        fetchVehicle.getData(url).then(data => setVehicle(data));
    }, [])

        return(
            <div>{vehicle?.name}</div>
        )
}

export default VehicleBlock;