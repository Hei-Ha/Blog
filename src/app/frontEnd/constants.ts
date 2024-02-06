import { getAPIUrl } from "@src/utils/utils";
import { SideMenuListType } from "@src/types/SideMenu/index";

export const getMenuData = async () => {
    const frontEndFolder = await fetch(
        `${getAPIUrl()}/api/sideMenu?folderPath=frontEnd`,
        {
            method: "get",
            cache: "no-cache",
        }
    )
        .then(response => response.json())
        .then(data => data.data);

    const result: SideMenuListType[] = await Promise.all(
        frontEndFolder.folderContent.map(item => {
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
                        resolve(data.data);
                    });
            });
        })
    );

    return result
};
