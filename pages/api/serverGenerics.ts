
const BASE_URL = 'http://localhost:8080/';

export function Get(
    path: string = '',
){
    const defaultOptions = {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
        }
    };


    return fetch(BASE_URL + path, { headers: defaultOptions.headers, method: defaultOptions.method})
        .then((res) => {
            return res.json();
        })

        .catch((e: any) => {

        });
}

// create post request to express js server
export function Post(
    path: string = '',
    body: any = {},
){
    const defaultOptions = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    };

    return fetch(BASE_URL + path, {
        body: JSON.stringify(body), headers: defaultOptions.headers, method: defaultOptions.method})
        .then((res) => {
            return res.json();
        })
        .catch((e: any) => {
         console.error(e)
        });
}