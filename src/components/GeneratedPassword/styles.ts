import styled from 'styled-components';

export const GeneratedPasswordContainer = styled.div`
    width: 100%;
    height: 5rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: ${({ theme }) => theme.colors.darkGrey};
    padding: 0rem 2rem;
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
`;