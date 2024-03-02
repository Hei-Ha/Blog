'use client'
import React, { useEffect, useState} from "react";
import { useTheme } from "next-themes";

export default () => {
    const [mounted, setMounted] = useState<boolean>(false)
    const { theme } = useTheme();
    
    
    useEffect(() => {
        setMounted(true)
    }, [])
    
    if ( !mounted ) return <div>123</div>
    
    return <div className='flex justify-center items-center mt-20 w-3/4 mx-auto'>
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
}