
const BASE_URL = 'http://localhost:8080/';

export function Get(
    path: string = '',
){
    const defaultOptions = {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
        },
        cache: 'no-cache',
        origin: '*'
    };


    return fetch(BASE_URL + path)
        .then((res) => {
            return res.json();
        })

        .catch((e: any) => {

        });
}