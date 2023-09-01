'use client'
import React from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import DarkImg from '@src/assets/dark.svg';
import LightImg from '@src/assets/light.svg';
import { Switch } from '@nextui-org/switch';
import {log} from "next/dist/server/typescript/utils";

export default () => {
    const { theme, setTheme } = useTheme();
    // <Image
    //     src={theme === 'dark' ? LightImg : DarkImg}
    //     alt="Picture of the author"
    //     width={20}
    //     height={20}
    //     onClick={() => theme == "dark" ? setTheme('light'): setTheme('dark')}
    // />
    const LightIcon = () => {
        return <Image
            src={LightImg}
            alt="Picture of the author"
            width={20}
            height={20}
            onClick={() => theme == "dark" ? setTheme('light'): setTheme('dark')}
        />
    }
    
    const DarkIcon = () => {
        return <Image
            src={DarkImg}
            alt="Picture of the author"
            width={20}
            height={20}
            onClick={() => theme == "dark" ? setTheme('light'): setTheme('dark')}
        />
    }
    return <div>
        <Switch
            defaultSelected={theme === 'light'}
            size="md"
            thumbIcon={({ isSelected, className }) =>
                isSelected ? <LightIcon /> : <DarkIcon />
            }
            color='secondary'
            onValueChange={(isSelected) => {
                isSelected ? setTheme('light'): setTheme('dark')
            }}
        />
    </div>
}