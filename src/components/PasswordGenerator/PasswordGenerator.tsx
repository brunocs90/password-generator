import { SliderCharacterLength } from "../SliderCharacterLength/SliderCharacterLength";
import { PasswordGeneratorContainer } from "./styles"

export function PasswordGenerator() {
    return (
        <PasswordGeneratorContainer>
            <SliderCharacterLength />
        </PasswordGeneratorContainer>
    );
}