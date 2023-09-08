import { Card, CardHeader, CardBody } from '@nextui-org/card'
import { Avatar } from '@nextui-org/avatar';
import { Image as NextUIImage } from '@nextui-org/image';
import Link from 'next/link';



export default () => {
    return <div className='flex justify-center w-full flex-auto flex-col'>
        <section className='h-500px smScreens:h-400px w-full flex justify-center items-center '>
            <div className='text-#3c3c43 text-5xl font-bold text-center smScreens:text-4xl'>
                东隅已逝，桑榆非晚
            </div>
        </section>
        <section className='mt-4 px-3 mb-10'>
            <div className="grid grid-cols-3 mdScreens:grid-cols-2 smScreens:grid-cols-1 gap-4">
                <Card className="bg-#fbfbfb p-4 rounded-lg cursor-pointer">
                    <Link href='/frontEnd/HTTP相关/HTTPS加密过程.md'>
                        <NextUIImage
                            alt="icon"
                            src="https://images.wangchuang.space/Images/Blogs/frontEnd.svg"
                            width={50}
                            height={50}
                        />
                        <div className="my-4">
                            <div className="font-bold">前端相关</div>
                            <div className=" text-xs text-#707077">整理了前端相关的知识，有错误欢迎指正</div>
                        </div>
                    </Link>
                </Card>
                <Card className="bg-#fbfbfb p-4 rounded-lg cursor-pointer">
                    <Link href='/algorithm/sort/二分查找.mdx'>
                        <NextUIImage
                            alt="icon"
                            src="https://images.wangchuang.space/Images/Blogs/suanfa.svg"
                            width={50}
                            height={50}
                        />
                        <div className="my-4">
                            <div className="font-bold">算法题</div>
                            <div className=" text-xs text-#707077">刷过的 leetCode 题目</div>
                        </div>
                    </Link>
                </Card>
                <Card className="bg-#fbfbfb p-4 rounded-lg cursor-pointer">
                    <NextUIImage
                        alt="icon"
                        src="https://images.wangchuang.space/Images/Blogs/other2.svg"
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


