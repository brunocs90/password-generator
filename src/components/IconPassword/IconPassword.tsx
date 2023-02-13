import { FaRegCopy } from 'react-icons/fa';
import { IconPasswordContainer } from './styles';

interface IIcon {
    text: string;
    onClick: () => void;
}

export function IconPassword({ text, onClick }: IIcon) {
    return (
        <IconPasswordContainer>
            <span className={`${true ? 'show' : 'hidden'}`} id="copied-label">
                {text}
            </span>
            <FaRegCopy onClick={onClick} />
        </IconPasswordContainer>
    );
}
