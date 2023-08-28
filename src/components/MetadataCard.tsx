import {Card, CardBody, CardFooter, CardHeader} from "@nextui-org/card";
import {Divider} from "@nextui-org/divider";

interface PropsType {
    content: string;
    metadata: {
        title: string;
        date: string;
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
            className='my-2'
        >
            <CardHeader>
                {metadata.title}
            </CardHeader>
            <Divider />
            <CardBody>
                {content}
            </CardBody>
            <Divider />
            <CardFooter className={'flex justify-end'}>
                {metadata.date}
            </CardFooter>
        </Card>
    </div>
}