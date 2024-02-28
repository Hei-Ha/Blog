// 'use client'
import React, { useState, useEffect } from "react";

const Icons = ({iconName, className}: { iconName: string; className?: string }) => {
    // const [mounted, setMounted] = useState<boolean>(false)
    //
    // useEffect(() => {
    //     setMounted(true)
    // }, [])
    //
    // if ( !mounted ) return
    
    return <svg className={`icon ${className}`} aria-hidden="true">
        <use xlinkHref={`#${iconName}`} />
    </svg>
}

export default Icons;