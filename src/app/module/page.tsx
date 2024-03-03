'use client'
import React, { useEffect, useState} from "react";
import { useTheme } from "next-themes";

export default () => {
    const [mounted, setMounted] = useState<boolean>(false)
    const { theme } = useTheme();
    
    
    useEffect(() => {
        setMounted(true)
    }, [])
    
    if ( !mounted ) return <div>Loading</div>
    
    return <div className='mt-20 w-2/4 mx-auto flex flex-col '>
        <h1 className='text-4xl font-bold'>Translate English to Chinese:</h1>
        <div className='flex justify-center items-center'>
            {
                React.createElement('gradio-app', {
                    className: 'gradioApp',
                    style: { width: '800px' },
                    src: "https://hei-ha-testspace.hf.space",
                    initial_hieght: '500px',
                    theme_mode: theme,
                })
            }
        </div>
    </div>
}