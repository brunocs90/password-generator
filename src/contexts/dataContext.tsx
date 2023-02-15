import { createContext, ReactNode, useState } from 'react';

type IOptions = {
    includeUppercase: boolean;
    includeLowerCase: boolean;
    includeNumbers: boolean;
    includeSymbols: boolean;
};

interface IDataContext {
    characterLength: number;
    setCharacterLength: React.Dispatch<React.SetStateAction<number>>;
    generatedPassword: string;
    setGeneratedPassword: React.Dispatch<React.SetStateAction<string>>;
    passwordStrength: number;
    setPasswordStrength: React.Dispatch<React.SetStateAction<number>>;
    gaugeValue: number;
    setGaugeValue: React.Dispatch<React.SetStateAction<number>>;
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
    gaugeValue: 0,
    setGaugeValue: () => {},
    options: {
        includeUppercase: false,
        includeLowerCase: false,
        includeNumbers: false,
        includeSymbols: false,
    },
    setOptions: () => {},
});

type DataProviderProps = {
    children: ReactNode;
};

export function DataContextProvider({ children }: DataProviderProps) {
    const [characterLength, setCharacterLength] = useState(10);
    const [generatedPassword, setGeneratedPassword] = useState('');
    const [passwordStrength, setPasswordStrength] = useState(0);
    const [gaugeValue, setGaugeValue] = useState(0);
    const [options, setOptions] = useState({
        includeUppercase: false,
        includeLowerCase: false,
        includeNumbers: false,
        includeSymbols: false,
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
                gaugeValue,
                setGaugeValue,
                options,
                setOptions,
            }}
        >
            {children}
        </DataContext.Provider>
    );
}
