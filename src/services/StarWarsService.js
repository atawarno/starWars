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

    getData = async (url = this._apiBase + this._films) => {
        return await this.getResource(url);
    }

}

export default StarWarsService;