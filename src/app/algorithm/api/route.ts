import { NextResponse } from "next/server";
import path from 'path';
import { promises as fsPromises } from 'fs';
import matter from "gray-matter";

export const GET = async () => {
    
    // 获取算法文件夹内所有的文件
    const algorithmDirectoryPath = path.join(process.cwd(), './blogs/algorithm');
    const filenames = await fsPromises.readdir(algorithmDirectoryPath);
    
    const blogsList = [];
    
    
    for (let name of filenames) {
        const filepath = path.join(algorithmDirectoryPath, name);
        const fileContent = await fsPromises.readFile(filepath);
        blogsList.push({
            filename: name,
            filepath: filepath,
            fileContent: matter(fileContent),
        });
    }
    
    return NextResponse.json(blogsList)
}