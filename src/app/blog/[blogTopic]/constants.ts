import { getAPIUrl } from "@src/utils/utils";
import { SideMenuListType } from "@src/types/SideMenu/index";

export const getMenuData = async (blogTopic: string) => {

    const blogTopicFolder = await fetch(
        `${getAPIUrl()}/api/sideMenu?blogTopic=${blogTopic}`,
        {
            method: "get",
            cache: "no-cache",
        }
    )
        .then(response => response.json())
        .then(data => data.data);


    const result: SideMenuListType[] = await Promise.all(
        blogTopicFolder.folderContent.map(item => {
            return new Promise(async (resolve, reject) => {
                fetch(
                    `${getAPIUrl()}/api/sideMenu?blogTopic=${blogTopic}/${item}`,
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