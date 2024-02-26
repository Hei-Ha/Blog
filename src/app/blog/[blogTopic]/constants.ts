import { SideMenuListType } from "@src/types/SideMenu/index";
import Fetch from '@src/utils/services'

export const getMenuData = async (blogTopic: string) => {
    const blogTopicFolder = await Fetch.GET(`api/sideMenu?blogTopic=${blogTopic}`).then(data => data.data)
    
    const result: SideMenuListType[] = await Promise.all(
        blogTopicFolder.folderContent.map(item => {
            return new Promise(async (resolve, reject) => {
                Fetch.GET(`api/sideMenu?blogTopic=${blogTopic}/${item}`)
                    .then(data => {
                        resolve(data.data);
                    });
            });
        })
    );
    return result
};