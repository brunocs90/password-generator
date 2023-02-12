import { ArrowIcon } from "./ArrowIcon";
import { ButtonContainer } from "./styles"

interface IButtonProps {
    onClick: () => void;
}

export function Button({ onClick }: IButtonProps) {
    return (
        <ButtonContainer>
            <button onClick={onClick} className="primary-button">GENERATE
                <div className="arrow-icon">
                    <ArrowIcon />
                </div>
            </button>
        </ButtonContainer>
    );
}