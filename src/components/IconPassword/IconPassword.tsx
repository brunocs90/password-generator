import { FaRegCopy } from 'react-icons/fa';
import { IconPasswordContainer } from './styles';

interface IIcon {
    text: string;
    isCopied: boolean;
    onClick: () => void;
}

export function IconPassword({ text, isCopied, onClick }: IIcon) {
    return (
        <IconPasswordContainer>
            <span className={`${isCopied ? 'show' : 'hidden'}`} id="copied-label">
                {text}
            </span>
            <FaRegCopy onClick={onClick} />
        </IconPasswordContainer>
    );
}
