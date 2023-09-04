import SideMenu from '@src/components/SideMenu';

export const revalidate = 0
export default async (props) => {
    const getSideMenusListJson = await fetch('http://localhost:3000/frontEnd/api').then(data => data.json());
    const sideMenusMap: Map<string, string[]> = new Map(JSON.parse(getSideMenusListJson));
    const sideMenus: Map<string, string[]> = new Map();
    Array.from(sideMenusMap.keys()).forEach(item => {
        const value = sideMenusMap.get(item).map(item => {
            const value = item.split('.');
            value.pop();
            return value.join('');
        })
        sideMenus.set(item, value);
    })
    
    return <div className='w-64 h-full overflow-y-scroll'
    >
        <SideMenu menuMap={sideMenusMap}  />
    </div>
}