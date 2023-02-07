import { useState } from "react";
import { IOptionsPassword, OptionsPassword } from "../OptionsPassword/OptionsPassword";
import { SliderCharacterLength } from "../SliderCharacterLength/SliderCharacterLength";
import { PasswordGeneratorContainer } from "./styles"

const optionsText: IOptionsPassword[] = [
    { type: 'upperCase', label: 'Include Uppercase Letters' },
    { type: 'lowerCase', label: 'Include Lowercase Letters' },
    { type: 'numbers', label: 'Include Numbers' },
    { type: 'symbols', label: 'Include Symbols' },
];

export function PasswordGenerator() {
    const [options, setOptions] = useState({ upperCase: true, lowerCase: false, numbers: false, symbols: false });

    const handleChange = (option: IOptionsPassword) => {
        setOptions({ ...options, [option.type]: !options[option.type] })
    };

    return (
        <PasswordGeneratorContainer>
            <SliderCharacterLength />
            {optionsText.map((option) => (
                <OptionsPassword key={option.type} optionPassword={option} onChange={() => handleChange(option)} checked={options[option.type]} />
            ))}
        </PasswordGeneratorContainer>
    );
}