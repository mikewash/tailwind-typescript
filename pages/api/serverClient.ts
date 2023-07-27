import {Get} from "./serverGenerics";


export const getData = async (path?: string) => {
    const data = await Get(path );
    return data;
}