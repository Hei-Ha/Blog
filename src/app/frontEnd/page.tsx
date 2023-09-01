import SideMenu from '@src/components/SideMenu';

export const revalidate = 0
export default async () => {
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
    
    
    return <div className='bg-#0E21A0 pt-4'>
        <SideMenu
            menuMap={sideMenus}
        />
        <main>
            content
        </main>
    </div>
}