'use client'
import React, { useEffect } from "react";
import { NextUIProvider } from "@nextui-org/react";
import { useStore } from '@src/store'


export default ( { children }: { children: React.ReactNode } ) => {
    let theme = useStore( ( state ) => state.theme )
    const switchTheme = useStore( state => state.actions.switchTheme )
    
    useEffect( () => {
        if ( localStorage.getItem( 'localTheme' ) ) {
            switchTheme(localStorage.getItem( 'localTheme' ) as 'light' | 'dark')
        } else if ( window.matchMedia( '(prefers-color-scheme: dark)' ).matches ) {
            switchTheme( 'dark' );
        }

    }, [] )
    
    return <NextUIProvider>
        <main className={ `${ theme } text-foreground bg-background` }>
            { children }
        </main>
    </NextUIProvider>
};
