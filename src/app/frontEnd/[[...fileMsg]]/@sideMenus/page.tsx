import SideMenu from '@src/components/SideMenu';
import { getAPIUrl } from '@src/utils/utils'
import ModalMenu from '@src/components/ModalMenu';

export const revalidate = 0
export default async () => {
    
    const getSideMenusListJson = await fetch(
        `${getAPIUrl()}/frontEnd/api`,
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
    
    return <div>
        <div className='mdScreens:hidden lgScreens:hidden'>
            <ModalMenu
                children={<SideMenu menuMap={sideMenusMap} menuType='frontEnd'/>}
            />
        </div>
        <div className='w-64 h-full smScreens:hidden overflow-y-scroll'>
            <SideMenu menuMap={sideMenusMap} menuType='frontEnd' />
        </div>
    </div>
}