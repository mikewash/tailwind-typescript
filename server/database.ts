import {createConnection, QueryError, RowDataPacket} from 'mysql2';

export const database = createConnection({
    host: "localhost",
    user: "test",
    password: "mypassword",
    database: "blog_database"
});
