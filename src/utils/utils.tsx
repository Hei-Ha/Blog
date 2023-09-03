import {promises as fsPromises} from "fs";
import path from "path";
import matter from "gray-matter";

export const ReadDirectory = async (path: string) => {
    const dirArr = await fsPromises.readdir(path);
    if (dirArr.indexOf('.DS_Store') >= 0) {
        dirArr.splice(dirArr.indexOf('.DS_Store'), 1)
    }
    
    if (dirArr.indexOf('images') >= 0) {
        dirArr.splice(dirArr.indexOf('images'), 1)
    }
    return dirArr
}

export const ReadFile = async (filepath) => {
    const actualPath = path.join(process.cwd(), filepath);
    const fileMsg = await fsPromises.readFile(actualPath);
    return matter(fileMsg);
}