import {createConnection} from 'mysql2/promise';


export const getConnection = async () => {
    return createConnection({
        host: "127.0.0.1",
        user: "test",
        password: "mypassword",
        database: "blog_database"
    })
}
