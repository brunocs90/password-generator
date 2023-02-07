import { OptionsPasswordContainer } from "./styles"

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
                {checked ? <svg width="14" height="12" xmlns="http://www.w3.org/2000/svg"><path stroke="#18171F" strokeWidth="3" fill="none" d="M1 5.607 4.393 9l8-8" /></svg>
                    : <></>
                }
                <input className="checkbox" type="checkbox" checked={checked} onChange={onChange} />
                {optionPassword.label}
            </label>
        </OptionsPasswordContainer >
    );
}