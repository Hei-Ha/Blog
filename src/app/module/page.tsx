'use client'
import React, { useState, useEffect } from 'react'
import { useTheme } from "next-themes";
import { Skeleton } from "@nextui-org/react";


export default () => {
    const [mounted, setMounted] = useState<boolean>( false )
    const { theme } = useTheme()
    
    // const handleLoadComplete = () => {
    //     console.log( "11111" );
    //     setMounted( true )
    // }
    //
    // useEffect( () => {
    //     if ( document.getElementsByClassName( 'gradioApp' )[0] ) {
    //         document.getElementsByClassName( 'gradioApp' )[0].addEventListener( 'render', handleLoadComplete )
    //     }
    //     return () => {
    //         document.getElementsByClassName( 'gradioApp' )[0].removeEventListener( 'render', handleLoadComplete )
    //     }
    // }, [] )
    
    
    return <div className='flex justify-center items-center mt-20 w-3/4 mx-auto'>
        <gradio-app
            class={ 'gradioApp' }
            style={{ width: '800px' }}
            src="https://hei-ha-testspace.hf.space"
            initial_hieght={ '500px' }
            container={ false }
            theme_mode={ theme === 'dark' ? 'dark' : 'light' }
        />
    </div>
}