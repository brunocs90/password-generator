import { useState } from "react";
import { PasswordStrengthContainer } from "./styles"

export type StrengthType = 0 | 1 | 2 | 3 | 4;
type StrengthProps = {
    strength: StrengthType,
    handleOnClickStrength: (level: StrengthType) => void
};
type GaugeProps = {
    currentLevel: StrengthType;
    availableLevel: StrengthType
};

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

function Gauge({ currentLevel, availableLevel }: GaugeProps) {
    const classCss = currentLevel >= availableLevel ? strengthCharacteristics(currentLevel)?.class : undefined;
    return (
        <div className={`strength-gauge ${classCss}`}></div>
    );
}

const availableStrengths: StrengthType[] = [0, 1, 2, 3, 4];

export function PasswordStrength({ strength, handleOnClickStrength }: StrengthProps) {
    const [tempStrength, setTempStrength] = useState<StrengthType>(strength);
    return (
        <PasswordStrengthContainer>
            <span className="strength-text">STRENGTH</span>
            <div className="gauge-container">
                <div className="gauge-text">
                    {strengthCharacteristics(tempStrength)?.title}
                </div>
                {availableStrengths.map((level) => {
                    if (level > 0)
                        return (
                            <Gauge key={level} currentLevel={tempStrength} availableLevel={level} />
                            // <button key={level}
                            //     onClick={() => handleOnClickStrength(level)}
                            //     onMouseEnter={() => setTempStrength(level)}
                            //     onMouseLeave={() => setTempStrength(strength)}>
                            //     <Gauge key={level} currentLevel={tempStrength} availableLevel={level} />
                            // </button>
                        );
                })}
            </div>
        </PasswordStrengthContainer>
    );
}