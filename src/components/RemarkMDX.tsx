import { remark } from 'remark';
import remarkHtml from 'remark-html';


export default async (props) => {
    const file = await remark()
        .use(remarkHtml)
        .process(props.source);
    
    
    return <article className='markdown-body'>
        <div dangerouslySetInnerHTML={{ __html: file.value }} />
    </article>
}