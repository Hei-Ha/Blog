import { NextRequest, NextResponse } from "next/server";
import { readFileContent } from "@src/utils/utils";
import Path from "path";

export const GET = async (request: NextRequest) => {
    const { searchParams } = request.nextUrl;
    
    const path = searchParams.get("path");
    
    const filePath = Path.join(process.cwd(), `./src/blogs/${path}` );
    const res = await readFileContent(filePath);

    return NextResponse.json({
        content: res,
    });
};
