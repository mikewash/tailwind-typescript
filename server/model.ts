import {getConnection} from "./database";


export const getUsers = async () => {
    return (await getConnection()).execute('SELECT * FROM users');
}