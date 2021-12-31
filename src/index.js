import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app/App';
import StarWarsService from "./components/services/StarWarsService";
// import './style/style.scss';

const starWarsService = new StarWarsService();

starWarsService.getAllCharacters().then(res => res.results.forEach(item => console.log(item.name)));

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);
