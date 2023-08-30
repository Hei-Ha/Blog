import {Card, CardBody, CardFooter, CardHeader} from "@nextui-org/card";
import {BlogMetadata} from "@src/app/articles/constantType";

interface PropsType {
    content: string;
    metadata: BlogMetadata;
}
export default (props: PropsType) => {
    const {metadata, content} = props
    return <div className='w-full'>
        <Card
            data-hover={false}
            fullWidth={true}
            isHoverable={true}
            isPressable={true}
            allowTextSelectionOnPress={true}
            isBlurred={true}
            isFooterBlurred={true}
            radius={'sm'}
            shadow={'sm'}
            className='my-2 bg-#fbfbfb'
        >
            <CardHeader>
                <h1 className='text-#333333 text-lg font-medium'>
                    {metadata.title}
                </h1>
            </CardHeader>
            <CardBody className='flex bg-#fbfbfb text-#a0a0a0'>
                <span>{metadata.summary}</span>
            </CardBody>
            <CardFooter className='flex flex-row justify-between text-xs pb-6'>
                <span className='text-#333333'>阅读全文</span>
                <span className='text-#a0a0a0'>写于：{metadata.date}</span>
            </CardFooter>
        </Card>
    </div>
}