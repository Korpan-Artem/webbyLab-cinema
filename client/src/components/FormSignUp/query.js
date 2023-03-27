export const signUp = async (values, status) => {
    let requestOptions = {
        method: 'POST',
        headers: {
            'content-type': "application/json"
        },
        body: JSON.stringify(values),
        redirect: 'follow'
    };

    let data = await fetch(`http://localhost:8001/api/v1/${status}`, requestOptions)
        .then(response => response.text())
        .then(result => {
            return result
        })
        .catch(error => console.log('error', error));
    
    return JSON.parse(data)
}



