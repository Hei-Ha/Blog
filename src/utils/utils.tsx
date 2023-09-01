import {promises as fsPromises} from "fs";

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