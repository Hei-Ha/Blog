import SideMenu from '@src/components/SideMenu';

export const revalidate = 0
export default async () => {
    const sideMenusListJson = await fetch('http://localhost:3000/frontEnd/api').then(data => data.json());
    const sideMenusMap = new Map(JSON.parse(sideMenusListJson))
    
    return <SideMenu
        menuMap={sideMenusMap}
    />
}