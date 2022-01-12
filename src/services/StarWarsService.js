class StarWarsService {
    _apiBase = 'https://swapi.dev/api/';
    _films = 'films';

    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    // getAllFilms = async () => {
    //     const res = await this.getResource(`${this._apiBase}films`);
    //     return res.results.map(this._transformFilm);
    // }

    getData = async (url = this._apiBase + this._films) => {
        return await this.getResource(url);
    }

    // _transformFilm = (film) => {
    //     return {
    //         episode_id: film.episode_id,
    //         release_date: film.release_date,
    //         characters: film.characters,
    //         planets: film.planets,
    //         starships: film.starships,
    //         vehicles: film.vehicles,
    //         species: film.species
    //     }
    // }

}

export default StarWarsService;