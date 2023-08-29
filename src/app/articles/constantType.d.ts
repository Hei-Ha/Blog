
export interface BlogMetadata {
    title: string;
    date: string;
    summary: string;
    id: number;
}
export interface BlogsContentList {
    content: string;
    data: BlogMetadata;
    isEmpty: boolean,
    excerpt: string,
}


export interface BlogsMessageType  {
    filename: string;
    filepath?: string;
    fileContent: BlogsContentList;
}