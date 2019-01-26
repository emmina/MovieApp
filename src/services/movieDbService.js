function getTopShows() {
    const requestOptions = {
        method: 'GET'
    };

    return fetch('https://api.themoviedb.org/3/tv/top_rated?api_key=68b0765a6d5c51653ecdd4bda511cc24&language=en-US&page=1', requestOptions).then(handleResponse);
}

function getTopMovies() {
    const requestOptions = {
        method: 'GET'
    };

    return fetch('https://api.themoviedb.org/3/movie/top_rated?api_key=68b0765a6d5c51653ecdd4bda511cc24&language=en-US&page=1', requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            const error = (data && data.message) || response.statusText;
            console.log(error)
            return Promise.reject(error);
        }
        return data;
    }, error => {
        console.log(error)
    });
}


export const movieDbService = {
    getTopShows,
    getTopMovies
};