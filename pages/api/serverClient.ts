import {Get, Post} from "./serverGenerics";

export const getNames = async (path?: string) => {
    const data = await Get(path );
    return data;
}
export const postLogin = async (path?: string, body?: any) => {
    const data = await Post(path, body);
    return data;
}
export const getBlogs = async (path?: string) => {
    const data = await Get(path );
    return data;
}