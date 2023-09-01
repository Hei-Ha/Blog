import CardList from '@src/components/CardList';
import Link from "next/link";
import {BlogsMessageType} from "@src/app/articles/constantType";
export default async () => {
    const blogsContentsList: BlogsMessageType[] = await fetch('http://localhost:3000/algorithm/api')
        .then((data) => data.json());
    
    
    return <div>
        {
            blogsContentsList.map((item, index) => {
                return <Link
                    key={item.filepath}
                    href={{ pathname: `/algorithm/${item.filename}`, query: {}}}
                >
                    <CardList
                        content={item.fileContent.content}
                        metadata={item.fileContent.data}
                    />
                </Link>
            })
        }
    </div>
}