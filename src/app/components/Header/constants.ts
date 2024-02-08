interface MenuItem {
    title: string;
    icon?: string;
    path: string;
    children?: MenuItem[];
}

export const MenuItemList: MenuItem[] = [
    {
        title: "前端相关",
        path: "/blog/frontEnd/Vue/Vue的Diff算法.md",
    },
    {
        title: "算法题",
        path: "/blog/algorithm/leetCode/1-两数之和.md",
    },
    {
        title: "联系我",
        path: "/connect",
    },
];