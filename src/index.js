import React, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';
import FilmBlock from "./components/filmBlock/FilmBlock";
import StarWarsService from "./services/StarWarsService";

// const getFilms = async () => {
//     const response = await fetch('https://swapi.dev/api/films');
//     return await response.json();
// }
const getFilms = new StarWarsService();

const App = () => {

    const [films, setFilms] = useState([]);

    useEffect(() => {
        getFilms.getData().then(r => setFilms(r.results));
    }, []);


    if(!films.length) return null;

    return (
        <>
            {films.map((film, index) => <FilmBlock key={index} film={film}/>)}
        </>
    )
}

ReactDOM.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>,
    document.getElementById('root')
);