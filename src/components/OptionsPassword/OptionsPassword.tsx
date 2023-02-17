import { useData } from '../../hooks/useData';
import { CheckIcon } from './CheckIcon';
import { OptionsPasswordContainer } from './styles';

export interface IOptionsPassword {
    type: 'upperCase' | 'lowerCase' | 'numbers' | 'symbols';
    label: string;
}

interface IOptionsPasswordProps {
    optionsPassword: IOptionsPassword[];
}

export function OptionsPassword({ optionsPassword }: IOptionsPasswordProps) {
    const { options, setOptions } = useData();

    const handleChange = (option: IOptionsPassword) => {
        setOptions({ ...options, [option.type]: !options[option.type] });
    };
    return (
        <OptionsPasswordContainer>
            {optionsPassword.map((option, index) => (
                <label key={index} className="container-option">
                    {options[option.type] ? <CheckIcon /> : <></>}
                    <input
                        className="checkbox"
                        type="checkbox"
                        checked={options[option.type]}
                        onChange={() => handleChange(option)}
                    />
                    {option.label}
                </label>
            ))}
        </OptionsPasswordContainer>
    );
}
