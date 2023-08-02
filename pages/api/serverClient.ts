import {Get} from "./serverGenerics";

export const getNames = async (path?: string) => {
    const data = await Get(path );
    return data;
}