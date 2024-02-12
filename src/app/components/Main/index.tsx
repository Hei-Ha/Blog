import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { MainCardList } from "./constants";
import Link from "next/link";
import Image from 'next/image'

export default () => {
    return (
        <section className={'flex flex-col flex-1 min-h-[calc(100vh-64px)]'}>
            <h2 className="md:h-400px lg:h-500px flex shrink-0 justify-center items-center text-#3c3c43 text-5xl font-bold sm:h-200px sm:text-3xl">
                东隅已逝，桑榆非晚
            </h2>
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
