import React from "react";

const Icons = ({iconName, className}: { iconName: string; className?: string }) => {
    return <svg className={`icon ${className}`} aria-hidden="true">
        <use xlinkHref={`#${iconName}`} />
    </svg>
}

export default Icons;