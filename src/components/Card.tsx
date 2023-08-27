import {Card, CardBody, CardFooter, CardHeader} from "@nextui-org/card";
import {Divider} from "@nextui-org/divider";

export default (
    { title, content, date }: { title: string, content: string, date: string }
) => {
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
                {title}
            </CardHeader>
            <Divider />
            <CardBody>
                {content}
            </CardBody>
            <Divider />
            <CardFooter className={'flex justify-end'}>
                {date}
            </CardFooter>
        </Card>
    </div>
}