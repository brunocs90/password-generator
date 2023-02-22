import { generate } from 'generate-password-browser';
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
    const {
        setGeneratedPassword,
        passwordStrength,
        setPasswordStrength,
        characterLength,
        setCharacterLength,
        options,
        setOptions,
    } = useData();

    const handleOnClickStrength = (strength: StrengthType) => {
        setPasswordStrength(strength);
        settingsPasswordStrength(strength);
    };

    const getNumbersChecks = (): number => {
        let numbersChecks = 0;
        for (const option of Object.values(options)) {
            if (option) {
                numbersChecks++;
            }
        }
        return numbersChecks;
    };

    const avaliablePasswordStrength = () => {
        const numbersChecks = getNumbersChecks();
        if (characterLength >= 15 && numbersChecks >= 4) {
            setPasswordStrength(4);
        } else if (characterLength >= 10 && numbersChecks >= 3) {
            setPasswordStrength(3);
        } else if (characterLength >= 5 && numbersChecks >= 2) {
            setPasswordStrength(2);
        } else if (characterLength < 5 || numbersChecks == 1) {
            setPasswordStrength(1);
        } else {
            setPasswordStrength(0);
        }
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
        avaliablePasswordStrength();

        if (getNumbersChecks() == 0) {
            setGeneratedPassword('');
            return;
        }
        const passwordGenerated = generate({
            length: characterLength,
            uppercase: options.upperCase,
            lowercase: options.lowerCase,
            numbers: options.numbers,
            symbols: options.symbols,
        });
        setGeneratedPassword(passwordGenerated);
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
