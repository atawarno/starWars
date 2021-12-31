class StarWarsService {
    _apiBase = 'https://swapi.dev/api/';

    getResource = async (url) => {
        let res = await fetch(url);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, status: ${res.status}`);
        }

        return await res.json();
    }

    getAllCharacters = () => {
        return this.getResource(`${this._apiBase}people`);
    }
}

export default StarWarsService;