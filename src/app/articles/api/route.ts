import { NextResponse } from "next/server";
import path from 'path';
import { promises as fsPromises } from 'fs';
import matter from 'gray-matter';


export const GET = async (request: Request) => {
    
    const blogsDirectoryPath = path.join(process.cwd(), './blogs');
    const allBlogsNames = await fsPromises.readdir(blogsDirectoryPath);
    const blogsList = [];
    
    
    for (let name of allBlogsNames) {
        const filepath = path.join(blogsDirectoryPath, name);
        const content = await fsPromises.readFile(filepath);
        blogsList.push({
            filename: name,
            filepath: filepath,
            fileContent: matter(content),
        });
    }
    return NextResponse.json(blogsList);
}