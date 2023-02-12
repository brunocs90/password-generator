import { useState } from "react";
import { IOptionsPassword, OptionsPassword } from "../OptionsPassword/OptionsPassword";
import { PasswordStrength, StrengthType } from "../PasswordStrength/PasswordStrength";

import { SliderCharacterLength } from "../SliderCharacterLength/SliderCharacterLength";
import { PasswordGeneratorContainer } from "./styles"

const optionsText: IOptionsPassword[] = [
    { type: 'upperCase', label: 'Include Uppercase Letters' },
    { type: 'lowerCase', label: 'Include Lowercase Letters' },
    { type: 'numbers', label: 'Include Numbers' },
    { type: 'symbols', label: 'Include Symbols' },
];

export function PasswordGenerator() {
    const [strength, setStrength] = useState<StrengthType>(3);
    const handleOnClickStrength = (strength: StrengthType) => {
        setStrength(strength);
    };
    return (
        <PasswordGeneratorContainer>
            <SliderCharacterLength />
            <OptionsPassword optionsPassword={optionsText} />
            <PasswordStrength strength={strength} handleOnClickStrength={handleOnClickStrength} />
        </PasswordGeneratorContainer>
    );
}