let apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8000/api/v1";

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

    let data = await fetch(`${apiUrl}/movies`, requestOptions)
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

    let data = await fetch(`${apiUrl}/movies/${id}`, requestOptions)
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

    let data = await fetch(`${apiUrl}/movies?sort=title&order=${order}&limit=10&offset=0`, requestOptions)
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

    let data = await fetch(`${apiUrl}/movies/import`, requestOptions)
        .then(response => response.text())
        .then(result => {
            return result;
        } )
        .catch(error => console.log('error', error));

    return data;
}


export const queryOneMovie = async (id,token) => {
    if (!token) return;

    let requestOptions = {
        method: 'GET',
        headers: {
            'Authorization': token,
        },
        redirect: 'follow'
    };

    let data = await fetch(`${apiUrl}/movies/${id}`, requestOptions)
        .then(response => response.text())
        .then(result => {
            return result;
        } )
        .catch(error => console.log('error', error));

    return data;
}


export const queryUpdateMovie = async (movie,id,token) => {
    if (!token) return;


    let requestOptions = {
        method: 'PATCH',
        headers: {
            'Authorization': token,
            'content-type': "application/json",
        },
        body: JSON.stringify(movie),
        redirect: 'follow'
    };



    let data = await fetch(`${apiUrl}/movies/${id}`, requestOptions)
        .then(response => response.text())
        .then(result => {
            return result;
        } )
        .catch(error => console.log('error', error));

    return data;
}

export const querySearchMovie = async (movie,params,token) => {
    if (!token) return;


    let requestOptions = {
        method: 'GET',
        headers: {
            'Authorization': token,
            'content-type': "application/json",
        },
        redirect: 'follow'
    };

    let data = await fetch(`${apiUrl}/movies?${params}=${movie}`, requestOptions)
        .then(response => response.text())
        .then(result => {
            return result;
        } )
        .catch(error => console.log('error', error));

    return data;
}