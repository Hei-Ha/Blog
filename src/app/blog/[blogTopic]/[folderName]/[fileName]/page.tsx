import React from "react";
import {getAPIUrl} from "@src/utils/utils";
import RenderMDX from "@src/app/components/RenderMDX";


export default async ({params}) => {
    const fileContent = await fetch(
        `${getAPIUrl()}/api/getFileContent?path=${params.blogTopic}/${params.folderName}/${params.fileName}`,
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
        <article className="prose dark:prose-invert my-10 sm:prose-sm sm:px-4">
            <RenderMDX sourceData={fileContent.content || ''}/>
        </article>
    );
};