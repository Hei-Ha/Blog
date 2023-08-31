import { Card, CardHeader, CardBody } from '@nextui-org/card'
import { Image } from '@nextui-org/image';
export default () => {
    
    const menusCardList = [
        {
            title: '第一个',
            imageUrl: '',
            
        }
    ]
    
    return <div className='flex justify-center w-full flex-auto flex-col'>
        <section className='w-full flex bg-#CAEDFF' style={{ height: '400px'}}>
            <div>...</div>
            <div>放一个大头像</div>
        </section>
        <section className='mt-4'>
            <Card className="py-4">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                    <p className="text-tiny uppercase font-bold">Daily Mix</p>
                    <small className="text-default-500">12 Tracks</small>
                    <h4 className="font-bold text-large">Frontend Radio</h4>
                </CardHeader>
                <CardBody className="overflow-visible py-2">
                    <Image
                        alt="Card background"
                        className="object-cover rounded-xl"
                        src="https://images.wangchuang.space/Images/Blogs/Avatar.JPG"
                        width={270}
                    />
                </CardBody>
            </Card>
        </section>
    </div>
}


