import React from "react";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";
import { MainCardList } from "./constants";
import Link from "next/link";

export default () => {
    return (
        <section>
            <h2 className="h-500px flex justify-center items-center text-#3c3c43 text-5xl font-bold">
                东隅已逝，桑榆非晚
            </h2>
            <div className="px-20 grid grid-cols-3 gap-7">
                {MainCardList.map((item) => {
                    return (
                        <Link href={'www.baidu.com'}>
                            <Card shadow="md" radius="sm" isHoverable key={item.title} className="h-200px">
                                <CardHeader>
                                    <p className="block text-tiny uppercase font-bold">
                                        {item.title}
                                    </p>
                                </CardHeader>
                                <CardBody>
                                    cardbody
                                    {/* <Image alt={item.title} src={item.imageUrl} /> */}
                                </CardBody>
                            </Card>
                        </Link>
                    );
                })}
            </div>
        </section>
    );
};
