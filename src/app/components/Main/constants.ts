interface MainCardType {
    title: string;
    description: string;
    imageUrl: string;
    path: string;
}


export const MainCardList: MainCardType[] = [
    {
        title: '前端',
        description: '前端记录',
        imageUrl: 'https://static.wangchuang.space/Images/Blogs/other/htmlCard.jpg',
        path: '/blog/frontEnd/HTTP相关/HTTPS加密过程.md',
    },
    {
        title: '算法',
        description: '刷过的算法题目',
        imageUrl: 'https://static.wangchuang.space/Images/Blogs/other/arithmeticCard.jpg',
        path: '/blog/algorithm/leetCode/1-两数之和.md',
    },
    // { title: '其它', description: '其它记录', imageUrl: 'https://static.wangchuang.space/Images/Blogs/other/arithmeticCard.jpg'},
]