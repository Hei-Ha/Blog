import { NextRequest, NextResponse } from "next/server";
import { readFileContent } from "@src/utils/utils";
import Path from "path";

export const GET = async (request: NextRequest) => {
    const { searchParams } = request.nextUrl;

    const blogTopic = searchParams.get("blogTopic");
    const folderName = searchParams.get("folderName");
    const fileName = searchParams.get("fileName");

    const filePath = Path.join(
        process.cwd(),
        `./blogs/${blogTopic}/${folderName}/${fileName}`
    );
    const res = await readFileContent(filePath);

    return NextResponse.json({
        content: res,
    });
};
