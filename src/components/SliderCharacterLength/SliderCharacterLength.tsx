import { ChangeEvent, useState } from 'react';
import {
    PasswordCharacterLengthHeader,
    PasswordSlider,
    PasswordSliderContainer,
    SliderCharacterLengthContainer,
} from './styles';

export function SliderCharacterLength() {
    const [value, setValue] = useState(1);

    const handleInputValue = (event: ChangeEvent<HTMLInputElement>) => {
        const number = Number(event.target.value);
        setValue(number);
    };

    return (
        <SliderCharacterLengthContainer>
            <PasswordCharacterLengthHeader>
                <label className="text" htmlFor="passwordLengthSlider">
                    Character Length
                </label>
                <span className="number">{value}</span>
            </PasswordCharacterLengthHeader>
            <PasswordSliderContainer>
                <PasswordSlider min={1} max={20} value={value} onChange={handleInputValue} />
            </PasswordSliderContainer>
        </SliderCharacterLengthContainer>
    );
}
