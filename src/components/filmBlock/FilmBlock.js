import React from "react";
import './filmBlock.css';
import CharacterBlock from "../characterBlock/CharacterBlock";
import PlanetBlock from "../planetBlock/PlanetBlock";
import StarshipBlock from "../starshipBlock/StarshipBlock";
import VehicleBlock from "../vehicleBlock/VehicleBlock";
import RaceBlock from "../raceBlock/RaceBlock";

const FilmBlock = ({film}) => {

    return (
        <div className='film'>
            <div className='film-block-title'><h1>{film.title}</h1></div>
            <div className='film-block'>
                <div className='film-block-table'>
                    <div className='film-block-characters'>
                        <div className='data-title'>Characters</div>
                        {film.characters.map((characterUrl, index) => <CharacterBlock key={index} url={characterUrl}/>)}
                    </div>
                    <div className='film-block-planets'>
                        <div className='data-title'>Planets</div>
                        {film.planets.map((planetUrl, index) => <PlanetBlock key={index} url={planetUrl}/>)}
                    </div>
                    <div className='film-block-starships'>
                        <div className='data-title'>Starships</div>
                        {film.starships.map((starshipUrl, index) => <StarshipBlock key={index} url={starshipUrl}/>)}
                    </div>
                    <div className='film-block-vehicles'>
                        <div className='data-title'>Vehicles</div>
                        {film.vehicles.map((vehicleUrl, index) => <VehicleBlock key={index} url={vehicleUrl}/>)}
                    </div><div className='film-block-species'>
                        <div className='data-title'>Species</div>
                        {film.species.map((raceUrl, index) => <RaceBlock key={index} url={raceUrl}/>)}
                    </div>
                </div>
            </div>
        </div>
    )

}

export default FilmBlock;