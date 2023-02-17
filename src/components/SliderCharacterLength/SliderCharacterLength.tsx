import { ChangeEvent } from 'react';
import { useData } from '../../hooks/useData';
import {
    PasswordCharacterLengthHeader,
    PasswordSlider,
    PasswordSliderContainer,
    SliderCharacterLengthContainer,
} from './styles';

export function SliderCharacterLength() {
    const { characterLength, setCharacterLength } = useData();

    const handleInputValue = (event: ChangeEvent<HTMLInputElement>) => {
        const number = Number(event.target.value);
        setCharacterLength(number);
    };

    return (
        <SliderCharacterLengthContainer>
            <PasswordCharacterLengthHeader>
                <label className="text" htmlFor="passwordLengthSlider">
                    Character Length
                </label>
                <span className="number">{characterLength}</span>
            </PasswordCharacterLengthHeader>
            <PasswordSliderContainer>
                <PasswordSlider min={1} max={20} value={characterLength} onChange={handleInputValue} />
            </PasswordSliderContainer>
        </SliderCharacterLengthContainer>
    );
}
