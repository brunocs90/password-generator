import styled from 'styled-components';

export const GeneratedPasswordContainer = styled.div`
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.darkGrey};
    padding-left: 2rem;
    padding-right: 2rem;
    /* border: solid purple; */

    .show {
        visibility: visible;
    }

    .hidden {
        visibility: hidden;
    }

    .password-placeholder {
        color: ${({ theme }) => theme.colors.grey};
        font-size: ${({ theme }) => theme.Typography.Heading_L['font-size']};
        /* border: solid yellow; */
    }

    .generated-password {
        color: ${({ theme }) => theme.colors.almostWhite};
        font-size: ${({ theme }) => theme.Typography.Heading_L['font-size']};
    }

    @media (max-width: 768px) {
        width: 100%;
        height: 4rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: solid red;
        padding: 1rem 1rem;

        .password-placeholder {
            font-size: ${({ theme }) => theme.Typography.Heading_M['font-size']};
        }

        .generated-password {
            font-size: ${({ theme }) => theme.Typography.Heading_M['font-size']};
        }
    }
`;
