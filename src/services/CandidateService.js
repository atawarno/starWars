export default class CandidateService{
    static async getCandidates(){
        // fetch from https://swapi.dev/api/people

        const json = await fetch('https://swapi.dev/api/people?page=');
        const result = await json.json();

        console.log(result);

        return result.results;
    }

    static async getNextPage(){
        const link = 'https://swapi.dev/api/people?page=';
        const pageCounter = 1;



    }
}