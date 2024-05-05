import React from "react";
import RenderMDX from "@src/components/RenderMDX";
import Fetch from "@src/utils/services";

export default async ({ params }) => {
    const fileContent = await Fetch.GET(
        `api/getFileContent?path=${params.blogTopic}/${params.folderName}/${params.fileName}`
    );
// -z-40
    return (
        <article className="w-full prose dark:prose-invert my-10 prose-base sm:prose-sm sm:px-2 "> 
            <RenderMDX sourceData={fileContent.content || ""} />
        </article>
    );
};
