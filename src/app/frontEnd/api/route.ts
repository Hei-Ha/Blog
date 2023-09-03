import {NextRequest, NextResponse} from "next/server";
import path from "path";
import {ReadDirectory, ReadFile} from "@src/utils/utils";
import matter from "gray-matter";


export const GET = async () => {
    const frontEndBlogsPath = path.join(process.cwd(), './blogs/frontEnd');
    
    const directoryMenus = await ReadDirectory(frontEndBlogsPath);
    const map = new Map();
    
    for (let i = 0; i < directoryMenus.length; i++) {
        if (directoryMenus[i] === '.DS_Store') continue ; // 删除 .DS_Store
        const blogsPath = path.join(frontEndBlogsPath, directoryMenus[i]);
        const blogNames = await ReadDirectory(blogsPath);
        map.set(directoryMenus[i], blogNames);
    }
    
    return NextResponse.json(JSON.stringify(Array.from(map)));
}

export const POST = async (request: NextRequest) => {
    const { category, filename } = await request.json();
    const fileContent = await ReadFile(`./blogs/frontEnd/${decodeURI(category)}/${decodeURI(filename)}`);
    return NextResponse.json(matter(fileContent))
}