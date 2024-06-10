import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3/trending/movie'

const keyApi = "06e2d1a8597b98bddccf4fed9e98e9e3";

export const getFilmsApi = async (serachQuery) => {
    const { data } = await axios.get( `${keyApi}`, {
        params: {
            query: serachQuery,
        }
    })
    return data


}

