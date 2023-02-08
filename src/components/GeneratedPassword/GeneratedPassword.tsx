import { IconPassword } from "../IconPassword/IconPassword";
import { GeneratedPasswordContainer } from "./styles"

export function GeneratedPassword() {
    const copyGeneratedPassword = () => {
        console.log('estou chamando o copy generated');
    }

    return (
        <GeneratedPasswordContainer>
            {true ?
                <span className='generated-password'>PTx1f5DaFX</span> :
                <span className='password-placeholder'>P4$5W0rD!</span>
            }
            <IconPassword text="COPIED" onClick={copyGeneratedPassword} />
        </GeneratedPasswordContainer>
    );
}