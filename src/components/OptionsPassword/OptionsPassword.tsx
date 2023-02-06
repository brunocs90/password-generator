import { OptionsPasswordContainer } from "./styles"

export interface IOptionsPassword {
    type: 'upperCase' | 'lowerCase' | 'numbers' | 'symbols';
    title: string;
};

export function OptionsPassword({ type, title }: IOptionsPassword) {
    const handleCheck = () => {

    }
    return (
        <OptionsPasswordContainer>
            <label> {title}
                <input type="checkbox" id="includeUpperCaseLetters" checked={false} onChange={handleCheck} />
                <span className="geekmark"></span>
            </label>
        </OptionsPasswordContainer >
    );
}