import React from "react";
import { Card, CardHeader, CardBody, Avatar } from "@nextui-org/react";
import { MainCardList } from "./constants";
import Link from "next/link";
import Image from 'next/image'
import { GithubIcon } from '@src/app/components/Icons/index'
export default () => {
    return (
        <section className={'flex flex-col flex-1 min-h-[100vh] items-center'}>
            <Avatar size='lg' className={'md:hidden lg:hidden w-20 h-20 mx-auto mt-20'} name="Wang" src={'https://static.wangchuang.space/Images/Blogs/Avatar.JPG'} />
            <h2 className="md:h-400px lg:h-500px flex shrink-0 justify-center items-center text-#3c3c43 text-5xl font-bold sm:h-150px sm:text-3xl">
                东隅已逝，桑榆非晚
            </h2>
            <a target='_blank' href={'https://github.com/Hei-Ha'} className='mb-10'>
                <GithubIcon />
            </a>
            <div className="px-20 flex justify-center sm:flex-col sm:px-0">
                {MainCardList.map( item => {
                    return (
                        <Link key={item.path} href={item.path} className={'pb-3'}>
                            <Card className={'py-4 mx-10'} shadow="md" radius="sm" isHoverable key={item.title}>
                                <CardHeader className={"pb-0 pt-2 px-4 flex-col items-start"}>
                                    <p className="block text-xl uppercase font-bold">
                                        {item.title}
                                    </p>
                                    <span className={'text-#70717a text-xs'}>
                                    {item.description}
                                </span>
                                </CardHeader>
                                <CardBody className={"overflow-visible py-2 items-center "}>
                                    <Image
                                        width={300}
                                        height={200}
                                        className="object-fit rounded-xl w-300px h-200px"
                                        alt={item.title}
                                        src={item.imageUrl}
                                        priority={true}
                                    />
                                </CardBody>
                            </Card>
                        </Link>
                    );
                } )}
            </div>
        </section>
    );
};
