export const queryAddMovie = async (values, token) => {
    if (!token) return;

    let requestOptions = {
        method: 'POST',
        headers: {
            'content-type': "application/json",
            'Authorization': token
        },
        body: JSON.stringify(values),
        redirect: 'follow'
    };

    let data = await fetch("http://localhost:8001/api/v1/movies", requestOptions)
        .then(response => response.text())
        .then(result => {
            return result
        })
        .catch(error => console.log('error', error));

    return data;
}

export const queryRemoveMovie = async (id, token) => {
    if (!token) return;

    let requestOptions = {
        method: 'DELETE',
        headers: {
            'content-type': "application/json",
            'Authorization': token
        },
        redirect: 'follow'
    };

    let data = await fetch(`http://localhost:8001/api/v1/movies/${id}`, requestOptions)
        .then(response => response.text())
        .then(result => {
            return result
        })
        .catch(error => console.log('error', error));

    return data;
}

export const queryAllMovies = async (order, token) => {
    if (!token) return;

    let requestOptions = {
        method: 'GET',
        headers: {
            'content-type': "application/json",
            'Authorization': token
        },
        redirect: 'follow'
    };

    let data = await fetch(`http://localhost:8001/api/v1/movies?sort=title&order=${order}&limit=10&offset=0`, requestOptions)
        .then(response => response.text())
        .then(result => {
            return result
        })
        .catch(error => console.log('error', error));

    return data;
}

export const queryImportMovies = async (fileInput,token) => {
    if (!token) return;



    let formdata = new FormData();
    formdata.append("movies", fileInput.files[0], "movies.txt");

    let requestOptions = {
        method: 'POST',
        headers: {
            'Authorization': token,
            'Access-Control-Allow-Origin': "*"
        },
        body: formdata,
        redirect: 'follow'
    };



    let data = await fetch("http://localhost:8001/api/v1/movies/import", requestOptions)
        .then(response => response.text())
        .then(result => {
            return result;
        } )
        .catch(error => console.log('error', error));

    return data;
}