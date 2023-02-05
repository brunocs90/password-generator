import { IconPasswordContainer } from "./styles"
import { FaRegCopy } from 'react-icons/fa';


interface IIcon {
    text: string;
    onClick: () => void;
}

export function IconPassword({ text, onClick }: IIcon) {
    return (
        <IconPasswordContainer>
            <span className={`${true ? "show" : "hidden"}`} id='copied-label'>{text}</span>
            <FaRegCopy onClick={onClick} />
        </IconPasswordContainer>
    );
}