import { IOptionsPassword, OptionsPassword } from "../OptionsPassword/OptionsPassword";
import { SliderCharacterLength } from "../SliderCharacterLength/SliderCharacterLength";
import { PasswordGeneratorContainer } from "./styles"

const optionsText: IOptionsPassword[] = [
    { type: 'upperCase', title: 'Include Uppercase Letters' },
    { type: 'lowerCase', title: 'Include Lowercase Letters' },
    { type: 'numbers', title: 'Include Numbers' },
    { type: 'symbols', title: 'Include Symbols' },
];

export function PasswordGenerator() {
    return (
        <PasswordGeneratorContainer>
            <SliderCharacterLength />
            {optionsText.map((option) => (
                <OptionsPassword key={option.type} type={option.type} title={option.title} />
            ))}
        </PasswordGeneratorContainer>
    );
}