import { NextRequest, NextResponse } from "next/server";
import { readFileContent } from "@src/utils/utils";
import Path from "path";

export const GET = async (request: NextRequest) => {
    const { searchParams } = request.nextUrl;

    const folder = searchParams.get("folder");
    const fileName = searchParams.get("fileName");

    const filePath = Path.join(
        process.cwd(),
        `./src/blogs/frontEnd/${folder}/${fileName}`
    );
    const res = await readFileContent(filePath);



    return NextResponse.json({
        content: res,
    });
};
