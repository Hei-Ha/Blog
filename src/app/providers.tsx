// 'use client'
// import {NextUIProvider} from '@nextui-org/react';
// import {ThemeProvider as NextThemesProvider, useTheme} from 'next-themes';
// import React from 'react';
//
// const Providers = (
//     {children}: { children: React.ReactNode }
// ) => {
//     const {theme, setTheme, systemTheme} = useTheme();
//
//     return <NextUIProvider>
//         <NextThemesProvider attribute={'class'} forcedTheme={theme}>
//             <div>
//                 <button onClick={() => setTheme('light')}>light</button>
//                 <button onClick={() => setTheme('dark')}>dark</button>
//                 {children}
//             </div>
//         </NextThemesProvider>
//     </NextUIProvider>
// }
// export {Providers};