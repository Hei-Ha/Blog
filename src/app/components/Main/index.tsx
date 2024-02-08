import React from "react";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { MainCardList } from "./constants";
import Link from "next/link";
import Image from 'next/image'

export default () => {
    return (
        <section>
            <h2 className="h-500px flex justify-center items-center text-#3c3c43 text-5xl font-bold">
                东隅已逝，桑榆非晚
            </h2>
            {/*大屏幕 grid 分块 grid-cols-7*/}
            {/*<div className="px-20 grid grid-cols-7 gap-7">*/}
            <div className="px-20 flex justify-center">
                {MainCardList.map( item => {
                    return (
                        <Link href={item.path}>
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
