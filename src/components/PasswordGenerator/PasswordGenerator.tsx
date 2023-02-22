import { StrengthType } from '../../contexts/dataContext';
import { useData } from '../../hooks/useData';
import { Button } from '../Button/Button';
import { IOptionsPassword, OptionsPassword } from '../OptionsPassword/OptionsPassword';
import { PasswordStrength } from '../PasswordStrength/PasswordStrength';

import { SliderCharacterLength } from '../SliderCharacterLength/SliderCharacterLength';
import { PasswordGeneratorContainer } from './styles';

const optionsText: IOptionsPassword[] = [
    { type: 'upperCase', label: 'Include Uppercase Letters' },
    { type: 'lowerCase', label: 'Include Lowercase Letters' },
    { type: 'numbers', label: 'Include Numbers' },
    { type: 'symbols', label: 'Include Symbols' },
];

export function PasswordGenerator() {
    const { passwordStrength, setPasswordStrength, setCharacterLength, setOptions } = useData();

    const handleOnClickStrength = (strength: StrengthType) => {
        setPasswordStrength(strength);
        settingsPasswordStrength(strength);
    };

    const settingsPasswordStrength = (strength: StrengthType) => {
        if (strength === 1) {
            setCharacterLength(5);
            setOptions({ upperCase: true, lowerCase: false, numbers: false, symbols: false });
        } else if (strength === 2) {
            setCharacterLength(10);
            setOptions({ upperCase: true, lowerCase: true, numbers: false, symbols: false });
        } else if (strength === 3) {
            setCharacterLength(15);
            setOptions({ upperCase: true, lowerCase: true, numbers: true, symbols: false });
        } else if (strength === 4) {
            setCharacterLength(20);
            setOptions({ upperCase: true, lowerCase: true, numbers: true, symbols: true });
        } else {
            setCharacterLength(1);
            setOptions({ upperCase: false, lowerCase: false, numbers: false, symbols: false });
        }
    };

    const handleClickButton = () => {
        console.log('Agora irei validar qual é a força da senha');
    };
    return (
        <PasswordGeneratorContainer>
            <SliderCharacterLength />
            <OptionsPassword optionsPassword={optionsText} />
            <PasswordStrength strength={passwordStrength} handleOnClickStrength={handleOnClickStrength} />
            <Button disable={false} onClick={handleClickButton} />
        </PasswordGeneratorContainer>
    );
}
