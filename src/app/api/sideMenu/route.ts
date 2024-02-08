import { NextRequest, NextResponse } from "next/server";
import Path from "path";
import {readDirectory } from '@src/utils/utils'

export const GET = async (request: NextRequest) => {


    const { searchParams } = request.nextUrl;

    const blogTopic = searchParams.get('blogTopic')

    const blogTopicFullPath = Path.join(process.cwd(), `./blogs/${blogTopic}`);
    const result = await readDirectory(blogTopicFullPath);

    return NextResponse.json({
        data: {
            blogTopic: blogTopic,
            folderContent: result
        }
    });
};
