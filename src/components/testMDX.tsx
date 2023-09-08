// import remarkParse from 'remark-parse';
//
// import remarkRehype from 'remark-rehype';
// import rehypeSanitize from 'rehype-sanitize';
// import { unified } from "unified";
// import rehypeStringify from 'rehype-stringify';
//
//
// export default async () => {
//     const file = await unified()
//         .use(remarkParse as any)
//         .use(remarkRehype as any)
//         .use(rehypeSanitize)
//         .use(rehypeStringify)
//         .process('### Hello, Neptune  \n  ' +
//             '`nihao`')
//
//     return file.value
// }