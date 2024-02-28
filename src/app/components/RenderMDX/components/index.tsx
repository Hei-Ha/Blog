import { Chip, Link, Button } from '@nextui-org/react'
import { ChipLink } from './ChipLink'




const ChipDifficult = (
    { content, className }: { content: string; className?: string; }
) => {
    return <Chip
        size='md'
        className={`bg-chipBg text-chipTextEasy select-none cursor-pointer text-xs ${className}`}
    >
        {content}
    </Chip>
}


export {
    Chip,
    Button,
    ChipLink,
    ChipDifficult,
}