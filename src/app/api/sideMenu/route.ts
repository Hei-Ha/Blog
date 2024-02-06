import { NextRequest, NextResponse } from "next/server";
import Path from "path";
import {readDirectory } from '@src/utils/utils'

export const GET = async (request: NextRequest) => {
    const { searchParams } = request.nextUrl;
    const folderPath = searchParams.get('folderPath')

    const folderFullPath = Path.join(process.cwd(), `./src/blogs/${folderPath}`);
    const result = await readDirectory(folderFullPath)

    return NextResponse.json({
        data: {
            folderPath: folderPath,
            folderContent: result
        }
    });
};
