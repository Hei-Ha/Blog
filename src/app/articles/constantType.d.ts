export interface BlogsContentList {
    content: string;
    data: { title: string, date: string },
    isEmpty: boolean,
    excerpt: string,
}