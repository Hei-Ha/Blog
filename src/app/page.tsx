import { Card, CardHeader, CardBody } from '@nextui-org/card'
import { Avatar } from '@nextui-org/avatar';
import { Image as NextUIImage } from '@nextui-org/image';
import Image from 'next/image';
import { Spacer } from '@nextui-org/spacer'



export default () => {
   
    
    return <div className='flex justify-center w-full flex-auto flex-col'>
        <section className='h-400px w-full flex justify-center items-center bg-#f0f0f0 '>
            <div className='text-#3c3c43 text-5xl font-bold'>
                东隅已逝，桑榆非晚。
            </div>
        </section>
        <section className='mt-4 px-3'>
            <div className="grid grid-cols-3 mdScreens:grid-cols-2 smScreens:grid-cols-1 gap-4">
                <Card className="bg-#f6f6f7 p-4 font-bold rounded-lg">
                    <NextUIImage
                        alt="icon"
                        src="https://images.wangchuang.space/Images/Blogs/book.svg"
                        width={50}
                        height={50}
                    />
                    <div className="my-4">
                        <div className="font-bold">前端相关</div>
                        <div className=" text-xs text-#707077">整理了前端相关的知识，有错误欢迎指正</div>
                    </div>
                </Card>
                <Card className="bg-#f6f6f7 p-4 font-bold rounded-lg">
                    <NextUIImage
                        alt="icon"
                        src="https://images.wangchuang.space/Images/Blogs/book.svg"
                        width={50}
                        height={50}
                    />
                    <div className="my-4">
                        <div className="font-bold">算法题</div>
                        <div className=" text-xs text-#707077">刷过的 leetCode 题目</div>
                    </div>
                </Card>
                <Card className="bg-#f6f6f7 p-4 font-bold rounded-lg">
                    <NextUIImage
                        alt="icon"
                        src="https://images.wangchuang.space/Images/Blogs/book.svg"
                        width={50}
                        height={50}
                    />
                    <div className="my-4">
                        <div className="font-bold">其他</div>
                        <div className=" text-xs text-#707077">其他内容待添加...</div>
                    </div>
                </Card>
            </div>
        </section>
    </div>
}


