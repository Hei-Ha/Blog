import { Chip, Link } from "@nextui-org/react";
import { ThemeIcons } from "@src/components/Icons";
import React from "react";

const ChipLink = (
    { href, content, className }: { href: string; content: string; className?: string; }
) => {
    
    return <Chip
        as={ Link }
        href={ href }
        target='_blank'
        size='md'
        className={ `bg-chipBg select-none cursor-pointer ${ className }` }
        startContent={
        <ThemeIcons
            lightIconName='blog-leetcode-light'
            darkIconName='blog-leetcode-dark'
            className='text-4xl mr-2'
            placeholderWidth='w-8'
        />
    }
    >
        { content }
    </Chip>
}

export default ChipLink