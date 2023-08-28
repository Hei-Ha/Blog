export interface BlogsContentList {
    content: string;
    data: { title: string; date: string; summary: string; },
    isEmpty: boolean,
    excerpt: string,
}