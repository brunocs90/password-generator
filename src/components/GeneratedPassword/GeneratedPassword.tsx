import { useState } from 'react';
import { useData } from '../../hooks/useData';
import { IconPassword } from '../IconPassword/IconPassword';
import { GeneratedPasswordContainer } from './styles';

export function GeneratedPassword() {
    const { generatedPassword } = useData();
    const [isCopied, setIsCopied] = useState(false);

    const resetCopyGeneratedPassword = () => {
        const timeout = setTimeout(() => {
            setIsCopied(false);
        }, 2000);

        return () => clearTimeout(timeout);
    };

    const copyGeneratedPassword = () => {
        navigator.clipboard.writeText(generatedPassword);
        setIsCopied(true);
        resetCopyGeneratedPassword();
    };

    return (
        <GeneratedPasswordContainer>
            {generatedPassword ? (
                <span className="generated-password">{generatedPassword}</span>
            ) : (
                <span className="password-placeholder">P4$5W0rD!</span>
            )}
            <IconPassword text="COPIED" isCopied={isCopied} onClick={copyGeneratedPassword} />
        </GeneratedPasswordContainer>
    );
}
