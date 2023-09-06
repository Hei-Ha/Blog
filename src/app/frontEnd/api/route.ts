import {NextRequest, NextResponse} from "next/server";
import path from "path";
import {ReadDirectory, ReadFileMsg} from "@src/utils/utils";

export const GET = async () => {
    console.log(1)
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
    console.log(2)
    const { category, filename } = await request.json();
    if (!category || !filename) return NextResponse.json({})
    
    const fileMsg = await ReadFileMsg(`./blogs/frontEnd/${decodeURI(category)}/${decodeURI(filename)}`);
    return NextResponse.json(fileMsg)
}