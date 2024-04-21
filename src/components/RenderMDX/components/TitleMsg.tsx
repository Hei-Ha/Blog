import ChipLink from "./ChipLink";
import DifficultyLevel from "./DifficultyLevel";



const TitleMsg = ({
    link,
    title,
    level,
}: {
    link: string;
    title: string;
    level: "easy" | "middle" | "hard";
}) => {
    return (
        <div className="flex items-center">
            <DifficultyLevel level={level} className='mr-2' />
            <ChipLink href={link} content={title} />
        </div>
    );
};

export default TitleMsg;
