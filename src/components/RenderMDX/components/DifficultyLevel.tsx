import { Chip } from "@nextui-org/react";


const DifficultyLevel = ({ level, className }: { level: string; className: string }) => {
    const levelArr = {
        'easy': { 
            text: '简单',
            style: 'text-easyText',
        },
        'middle': {
            text: '中等',
            style: 'text-middleText',
        },
        'hard': {
            text: '困难',
            style: 'text-hardText',
        }
    }


    return (
        <Chip
            size="md"
            className={`bg-chipBg text-chipTextEasy select-none cursor-pointer text-xs ${className} ${levelArr[level].style}`}
        >
            {levelArr[level].text}
        </Chip>
    );
}

export default DifficultyLevel