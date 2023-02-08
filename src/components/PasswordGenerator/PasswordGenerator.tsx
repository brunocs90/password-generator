import { IOptionsPassword, OptionsPassword } from "../OptionsPassword/OptionsPassword";
import { PasswordStrength } from "../PasswordStrength/PasswordStrength";
import { SliderCharacterLength } from "../SliderCharacterLength/SliderCharacterLength";
import { PasswordGeneratorContainer } from "./styles"

const optionsText: IOptionsPassword[] = [
    { type: 'upperCase', label: 'Include Uppercase Letters' },
    { type: 'lowerCase', label: 'Include Lowercase Letters' },
    { type: 'numbers', label: 'Include Numbers' },
    { type: 'symbols', label: 'Include Symbols' },
];

export function PasswordGenerator() {

    return (
        <PasswordGeneratorContainer>
            <SliderCharacterLength />
            <OptionsPassword optionsPassword={optionsText} />
            <PasswordStrength />
        </PasswordGeneratorContainer>
    );
}