import { useState } from "react";
import { PasswordStrengthContainer } from "./styles"

export type StrengthType = 0 | 1 | 2 | 3 | 4;
const availableStrengths: StrengthType[] = [0, 1, 2, 3, 4];

function strengthCharacteristics(strength: StrengthType) {
    switch (strength) {
        case 1:
            return { title: 'Too Weak!', class: 'too-weak' };
        case 2:
            return { title: 'weak', class: 'weak' };
        case 3:
            return { title: 'medium', class: 'medium' };
        case 4:
            return { title: 'strong', class: 'strong' };
    }
}

type GaugeProps = {
    currentLevel: StrengthType;
    availableLevel: StrengthType;
};
function Gauge({ currentLevel, availableLevel }: GaugeProps) {
    const classCss = currentLevel >= availableLevel ? strengthCharacteristics(currentLevel)?.class : undefined;
    return (
        <div className={`strength-gauge ${classCss}`}></div>
    );
}

export function PasswordStrength() {
    const strength = 1;
    const [currentStrength, setCurrentStrength] = useState<StrengthType>(strength);
    return (
        <PasswordStrengthContainer>
            <span className="strength-text">STRENGTH</span>
            <div className="gauge-container">
                <div className="gauge-text">
                    {strengthCharacteristics(currentStrength)?.title}
                </div>
                {availableStrengths.map((level) => {
                    if (level > 0)
                        return (
                            <button key={level}
                                onClick={() => setCurrentStrength(level)}
                                onMouseEnter={() => setCurrentStrength(level)}
                                onMouseLeave={() => setCurrentStrength(strength)}>
                                <Gauge key={level} currentLevel={currentStrength} availableLevel={level} />
                            </button>
                        );
                })}
            </div>
        </PasswordStrengthContainer>
    );
}