import {createConnection, QueryError, RowDataPacket} from 'mysql2';

export const database = createConnection({
    host: "127.0.0.1",
    user: "test",
    password: "mypassword",
    database: "blog_database"
});
