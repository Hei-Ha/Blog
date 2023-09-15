import SideMenu from '@src/components/SideMenu';
import { getAPIUrl } from '@src/utils/utils'
import ModalMenu from "@src/components/ModalMenu";
export const revalidate = 0
export default async () => {
    const getSideMenusListJson = await fetch(
        `${getAPIUrl()}/algorithm/api`,
        {
            cache: 'no-cache'
        })
        .then(data => data.json());
    
    const sideMenusMap: Map<string, string[]> = new Map(JSON.parse(getSideMenusListJson));
    
    // const sideMenus: Map<string, string[]> = new Map();
    
    // Array.from(sideMenusMap.keys()).forEach(item => {
    //     const value = sideMenusMap.get(item).map(item => {
    //         const value = item.split('.');
    //         value.pop();
    //         return value.join('');
    //     })
    //     sideMenus.set(item, value);
    // })
    
    
    if (sideMenusMap.get('leetCode')) {
        const res = sideMenusMap.get('leetCode').sort((a, b) => {
            return Number(a.split('-')[0]) - Number(b.split('-')[0])
        })
        sideMenusMap.set('leetCode', res);
    }
    
    return <div>
        <div className='mdScreens:hidden lgScreens:hidden'>
            <ModalMenu>
                <SideMenu menuMap={sideMenusMap} menuType='algorithm' />
            </ModalMenu>
        </div>
        <div className='w-64 h-full smScreens:hidden overflow-y-scroll'>
            <SideMenu menuMap={sideMenusMap} menuType='algorithm' />
        </div>
    </div>
}
