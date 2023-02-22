import { createContext, ReactNode, useState } from 'react';

export type StrengthType = 0 | 1 | 2 | 3 | 4;

type IOptions = {
    upperCase: boolean;
    lowerCase: boolean;
    numbers: boolean;
    symbols: boolean;
};

interface IDataContext {
    characterLength: number;
    setCharacterLength: React.Dispatch<React.SetStateAction<number>>;
    generatedPassword: string;
    setGeneratedPassword: React.Dispatch<React.SetStateAction<string>>;
    passwordStrength: StrengthType;
    setPasswordStrength: React.Dispatch<React.SetStateAction<StrengthType>>;
    options: IOptions;
    setOptions: React.Dispatch<React.SetStateAction<IOptions>>;
}

export const DataContext = createContext<IDataContext>({
    characterLength: 0,
    setCharacterLength: () => {},
    generatedPassword: '',
    setGeneratedPassword: () => {},
    passwordStrength: 0,
    setPasswordStrength: () => {},
    options: {
        upperCase: false,
        lowerCase: false,
        numbers: false,
        symbols: false,
    },
    setOptions: () => {},
});

type DataProviderProps = {
    children: ReactNode;
};

export function DataContextProvider({ children }: DataProviderProps) {
    const [characterLength, setCharacterLength] = useState(5);
    const [generatedPassword, setGeneratedPassword] = useState('testeBruno1');
    const [passwordStrength, setPasswordStrength] = useState<StrengthType>(1);
    const [options, setOptions] = useState({
        upperCase: true,
        lowerCase: false,
        numbers: false,
        symbols: false,
    });

    return (
        <DataContext.Provider
            value={{
                characterLength,
                setCharacterLength,
                generatedPassword,
                setGeneratedPassword,
                passwordStrength,
                setPasswordStrength,
                options,
                setOptions,
            }}
        >
            {children}
        </DataContext.Provider>
    );
}
