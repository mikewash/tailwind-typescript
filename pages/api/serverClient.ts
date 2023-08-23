import {Get, Post} from "./serverGenerics";


// This will handle all the Get requests to the server
// Unless you have a custom request
export const getRequest = async (path?: string) => {
    return await Get(path);
}
export const postLogin = async (path?: string, body?: any) => {
    const data = await Post(path, body);
    return data;
}