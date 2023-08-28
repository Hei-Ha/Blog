import {Card, CardBody, CardFooter, CardHeader} from "@nextui-org/card";
import {Divider} from "@nextui-org/divider";

interface PropsType {
    content: string;
    metadata: {
        title: string;
        date: string;
        summary: string;
    };
}
export default (props: PropsType) => {
    const {metadata, content} = props
    return <div className='w-full'>
        <Card
            fullWidth={true}
            isHoverable={true}
            isPressable={true}
            allowTextSelectionOnPress={true}
            isBlurred={true}
            radius={'sm'}
            className='my-2'
        >
            <CardHeader>
                <div className='text-#333333'>
                    {metadata.title}
                </div>
            </CardHeader>
            <Divider />
            <CardBody className='flex bg-#fbfbfb'>
                <span>{metadata.summary}</span>
            </CardBody>
            <CardFooter className='flex flex-row justify-between'>
                <span className='text-#333333'>阅读全文</span>
                <span className='text-xs text-#a0a0a0'>写于：{metadata.date}</span>
            </CardFooter>
        </Card>
    </div>
}