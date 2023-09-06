import { NextResponse } from "next/server";
import path from 'path';
import { promises as fsPromises } from 'fs';
import matter from 'gray-matter';
import {ReadDirectory} from "@src/utils/utils";


export const GET = async (request: Request) => {
    const articlesBlogsPath = path.join(process.cwd(), './blogs/algorithm');
    const directoryMenus = await ReadDirectory(articlesBlogsPath);
    const map = new Map();
    
    for (let i = 0; i < directoryMenus.length; i++) {
        if (directoryMenus[i] === '.DS_Store') continue ; // 删除 .DS_Store
        const blogsPath = path.join(articlesBlogsPath, directoryMenus[i]);
        const blogNames = await ReadDirectory(blogsPath);
        map.set(directoryMenus[i], blogNames);
    }
    
    
    return NextResponse.json(JSON.stringify(Array.from(map)));
}