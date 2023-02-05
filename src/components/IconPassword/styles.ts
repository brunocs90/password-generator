import styled from 'styled-components';

export const IconPasswordContainer = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    border: solid pink;

    svg {
        width: 21px;
        height: 24px;
        cursor: pointer;
        fill: ${({ theme }) => theme.colors.neonGreen};
    }

    svg:hover path {
        fill: ${({ theme }) => theme.colors.almostWhite};
    }

    #copied-label {
        color: ${({ theme }) => theme.colors.neonGreen};
        font-size: ${({ theme }) => theme.Typography.Body_M['font-size']};
    }
`;