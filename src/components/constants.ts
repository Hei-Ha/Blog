interface MenuItem {
    title: string;
    icon?: string;
    path: string;
    children?: MenuItem[];
}

export const MenuItemList: MenuItem[] = [
    {
        title: "前端相关",
        path: "/blog/frontEnd/HTTP相关/HTTPS加密过程.md",
    },
    {
        title: "算法题",
        path: "/blog/algorithm/leetCode/1-两数之和.mdx",
    },
    // {
    //     title: "联系我",
    //     path: "/connect",
    // },
    {
        title: '模型',
        path: '/module'
    }
];