import React from "react";
import { getAPIUrl } from "@src/utils/utils";

export default async ({ params }) => {
    const content = await fetch(
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

    return <div>{content.content}</div>;
};
