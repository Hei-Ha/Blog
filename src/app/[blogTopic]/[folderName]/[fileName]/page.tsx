import React from "react";
import { getAPIUrl } from "@src/utils/utils";
import RenderMDX from "@src/app/components/RenderMDX";


export default async ({ params }) => {
    const fileContent = await fetch(
        `${getAPIUrl()}/api/getFileContent?blogTopic=${params.blogTopic}&folderName=${params.folderName}&fileName=${params.fileName}`,
        {
            method: "get",
            cache: "no-cache",
        }
    )
        .then(data => data.json())
        .catch(err => {
            console.log(err);
        });

    return (
        <article className="prose w-1200px my-10">
            <RenderMDX sourceData={fileContent.content} />
        </article>
    );
};