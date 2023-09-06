import {NextRequest, NextResponse} from "next/server";
import path from 'path';
import {ReadDirectory, ReadFileMsg} from "@src/utils/utils";


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

export const POST = async (request: NextRequest) => {
    const { category, filename } = await request.json();
    
    if (!category || !filename) return NextResponse.json({})
    const fileMsg = await ReadFileMsg(`./blogs/algorithm/${decodeURI(category)}/${decodeURI(filename)}`);
    return NextResponse.json(fileMsg)
}