import styled from 'styled-components';

export const PasswordStrengthContainer = styled.div`
    width: 100%;
    height: 4.5rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    background-color: ${({ theme }) => theme.colors.veryDarkGrey};
    padding: 0rem 2rem;

    /* border: solid yellow; */

    .strength-text {
        color: ${({ theme }) => theme.colors.grey};
        font-size: ${({ theme }) => theme.Typography.Body_M['font-size']};
        font-weight: ${({ theme }) => theme.Typography.Body_M['font-weight']};
        line-height: ${({ theme }) => theme.Typography.Body_M['line-height']};
        /* border: solid blue; */
    }

    .gauge-container {
        display: flex;
        flex-direction: row;
        justify-items: center;
        align-items: center;
    }

    .gauge-text {
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.almostWhite};
        font-size: ${({ theme }) => theme.Typography.Heading_M['font-size']};
        font-weight: ${({ theme }) => theme.Typography.Heading_M['font-weight']};
        line-height: ${({ theme }) => theme.Typography.Heading_M['line-height']};
        padding-right: 0.75rem;
    }

    .strength-gauge {
        display: block;
        width: 0.625rem;
        height: 1.75rem;
        margin-right: 0.4rem;
        border: 2px solid ${({ theme }) => theme.colors.almostWhite};
        box-sizing: border-box;
    }

    .too-weak {
        background-color: ${({ theme }) => theme.colors.red};
        border-color: ${({ theme }) => theme.colors.red};
    }

    .weak {
        background-color: ${({ theme }) => theme.colors.orange};
        border-color: ${({ theme }) => theme.colors.orange};
    }

    .medium {
        background-color: ${({ theme }) => theme.colors.yellow};
        border-color: ${({ theme }) => theme.colors.yellow};
    }

    .strong {
        background-color: ${({ theme }) => theme.colors.neonGreen};
        border-color: ${({ theme }) => theme.colors.neonGreen};
    }

    button {
        all: unset;
        width: 0.64rem;
        height: 1.74rem;
        margin-right: 0.4rem;
    }

    @media (max-width: 768px) {
        height: 3.5rem;
        padding: 0rem 0.813rem;

        .strength-text {
            font-size: 16px;
        }

        .gauge-text {
            font-size: ${({ theme }) => theme.Typography.Body_M['font-size']};
            padding-right: 0.75rem;
        }
    }
`;
