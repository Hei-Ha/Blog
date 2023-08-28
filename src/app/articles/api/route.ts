import { NextResponse } from "next/server";
import path from 'path';
import { promises as fsPromises } from 'fs';

// const currentFilePath = import.meta.url


export const GET = async (request: Request) => {
    const blogsDirectoryPath = path.join(process.cwd(), './blogs');
    const allBlogsNames = await fsPromises.readdir(blogsDirectoryPath);
    const blogsList = [];
    
    for (let item of allBlogsNames) {
        const filePath = path.join(blogsDirectoryPath, item);
        const content = await fsPromises.readFile(filePath);
        blogsList.push(content.toString());
    }
    return NextResponse.json(blogsList);
}