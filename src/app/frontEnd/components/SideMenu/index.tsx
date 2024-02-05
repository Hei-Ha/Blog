import React from "react";
import { getAPIUrl } from "@src/utils/utils";
import SideMenu from "@src/app/components/SideMenu";

export default async () => {
    const frontEndFolder = await fetch(
        `${getAPIUrl()}/api/sideMenu?folderPath=frontEnd`,
        {
            method: "get",
            cache: "no-cache",
        }
    )
        .then(response => response.json())
        .then(data => data.data);


    const result = await Promise.all(frontEndFolder.folderContent.map(item => {
            return new Promise(async (resolve, reject) => {
                fetch(
                    `${getAPIUrl()}/api/sideMenu?folderPath=frontEnd/${item}`,
                    {
                        method: "get",
                        cache: "no-cache",
                    }
                )
                    .then(response => response.json())
                    .then(data => {
                        if (data.status === 200) {
                            resolve(data.data);
                        }
                    });
            });
        }))


    return <SideMenu listData={result} />;
};
