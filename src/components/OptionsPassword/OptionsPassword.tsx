import { OptionsPasswordContainer } from "./styles";
import { CheckIcon } from "./CheckIcon";

export interface IOptionsPassword {
    type: 'upperCase' | 'lowerCase' | 'numbers' | 'symbols';
    label: string;
}

interface IOptionsPasswordProps {
    optionPassword: IOptionsPassword;
    checked: boolean;
    onChange: () => void;
}

export function OptionsPassword({ optionPassword, checked, onChange }: IOptionsPasswordProps) {
    return (
        <OptionsPasswordContainer>
            <label className="label">
                {checked ? <CheckIcon /> : <></>
                }
                <input className="checkbox" type="checkbox" checked={checked} onChange={onChange} />
                {optionPassword.label}
            </label>
        </OptionsPasswordContainer >
    );
}