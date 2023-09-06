import { BlogsMessageType} from "@src/app/articles/constantType";
import CardList from '@src/components/CardList';
import Link from "next/link";


export default async () => {
    // fetch URl: http://localhost:3000/articles/api
    
    const data = await fetch('http://localhost:3000/articles/api'); // 获取 article 目录中，所有的文件信息，包括文件内容。
    const blogsMessageList: BlogsMessageType[] = await data.json();
    
    return <div>
        {
            blogsMessageList.map((item, index) => {
                return <Link href={{ pathname: `/articles/${index}`, query: { filename: item.filename, fileOther: 'aaa' }} } key={item.filepath}>
                    <CardList
                        content={item.fileContent.content}
                        metadata={item.fileContent.data}
                    />
                </Link>
            })
        }
    </div>
}