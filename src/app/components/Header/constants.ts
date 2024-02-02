interface MenuItem {
    title: string;
    icon?: string;
    path: string;
    children?: MenuItem[];
}

export const MenuItemList: MenuItem[] = [
    {
        title: "前端相关",
        path: "/frontEnd",
    },
    {
        title: "算法题",
        path: "/suanfa",
    },
    {
        title: "联系我",
        path: "/connect",
    },
];