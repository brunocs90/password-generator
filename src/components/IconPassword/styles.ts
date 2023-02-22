import styled from 'styled-components';

export const IconPasswordContainer = styled.div`
    display: flex;
    gap: 1rem;
    align-items: center;
    /* border: solid blue; */

    svg {
        width: 1.313rem;
        height: 1.5rem;
        cursor: pointer;
        fill: ${({ theme }) => theme.colors.neonGreen};
    }

    svg:hover path {
        fill: ${({ theme }) => theme.colors.almostWhite};
    }

    .show {
        visibility: visible;
    }

    .hidden {
        visibility: hidden;
    }

    #copied-label {
        color: ${({ theme }) => theme.colors.neonGreen};
        font-size: ${({ theme }) => theme.Typography.Body_M['font-size']};
    }

    @media (max-width: 768px) {
        svg {
            width: 1.063rem;
            height: 1.25rem;
        }

        span {
            display: none;
        }

        #copied-label {
            display: none;
        }
    }
`;
