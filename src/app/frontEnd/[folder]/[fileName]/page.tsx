import React from "react";
import { getAPIUrl } from "@src/utils/utils";
import RenderMDX from '@src/app/components/RenderMDX'

export default async ({ params }) => {
    const fileContent = await fetch(
        `${getAPIUrl()}/api/getFileContent?folder=${params.folder}&fileName=${params.fileName}`,
        {
            method: "get",
            cache: "no-cache",
        }
    )
        .then(data => data.json())
        .catch(err => {
            console.log(err);
        });

    return <RenderMDX sourceData={fileContent.content} />
};
