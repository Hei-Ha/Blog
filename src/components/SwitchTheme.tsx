'use client'
import React from 'react';
import { useTheme } from 'next-themes';
import Image from 'next/image';
import DarkImg from '@src/assets/dark.svg';
import LightImg from '@src/assets/light.svg';

export default () => {
    const { theme, setTheme } = useTheme();
    return <Image
        src={theme === 'dark' ? LightImg : DarkImg}
        alt="Picture of the author"
        width={20}
        height={20}
        onClick={() => theme == "dark" ? setTheme('light'): setTheme('dark')}
    />
}