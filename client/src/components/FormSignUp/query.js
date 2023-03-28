let apiUrl = process.env.REACT_APP_API_URL;

export const signUp = async (values, status) => {
    let requestOptions = {
        method: 'POST',
        headers: {
            'content-type': "application/json"
        },
        body: JSON.stringify(values),
        redirect: 'follow'
    };
    console.log(process.env)

    let data = await fetch(`${apiUrl}/${status}`, requestOptions)
        .then(response => response.text())
        .then(result => {
            return result
        })
        .catch(error => console.log('error', error));
    
    return JSON.parse(data)
}



