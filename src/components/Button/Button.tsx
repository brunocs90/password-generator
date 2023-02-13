import { ArrowIcon } from './ArrowIcon';
import { ButtonContainer } from './styles';

interface IButtonProps {
    disable: boolean;
    onClick: () => void;
}

export function Button({ disable, onClick }: IButtonProps) {
    return (
        <ButtonContainer>
            <button disabled={disable} onClick={onClick} className="primary-button">
                GENERATE
                <div className="arrow-icon">
                    <ArrowIcon />
                </div>
            </button>
        </ButtonContainer>
    );
}
