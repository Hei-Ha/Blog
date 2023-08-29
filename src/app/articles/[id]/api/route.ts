import { NextResponse } from "next/server";
import path from 'path';
import { promises as fsPromises } from 'fs';
import matter from 'gray-matter';

export const GET = async (
    request: Request,
    { params }: { params: { slug: string } }
) => {
    const { searchParams } = new URL(request.url);
    const filename = searchParams.get('filename');
    
    const blogsPath = path.join(process.cwd(), './blogs', `/${filename}`);
    const blogsMessage = await fsPromises.readFile(blogsPath);
    const result = {
        filename: filename,
        fileContent: matter(blogsMessage)
    }
    
    
    return NextResponse.json(result);
}