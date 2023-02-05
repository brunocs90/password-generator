import { ContentContainer, SliderCharacterLengthContainer } from "./styles"

export function SliderCharacterLength() {
    return (
        <SliderCharacterLengthContainer>
            <ContentContainer>
                <span className="text">Character Length</span>
                <span className="number">10</span>
            </ContentContainer>
            <ContentContainer>
                <span className="text">Character Length</span>
                <span className="number">10</span>
            </ContentContainer>
        </SliderCharacterLengthContainer>
    );
}