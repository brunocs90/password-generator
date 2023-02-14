import styled from 'styled-components';

export const OptionsPasswordContainer = styled.div`
    width: 100%;
    height: 13.5rem;
    color: ${({ theme }) => theme.colors.almostWhite};
    font-size: ${({ theme }) => theme.Typography.Body_M['font-size']};
    font-weight: ${({ theme }) => theme.Typography.Body_M['font-weight']};
    line-height: ${({ theme }) => theme.Typography.Body_M['line-height']};
    /* border: solid white; */
    padding: 2rem 0rem;

    .container-option {
        width: 100%;
        height: 2.375rem;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        /* border: solid green; */
    }

    .checkbox {
        margin-right: 1.5rem;
    }

    input {
        all: unset;
        width: 1.25rem;
        height: 1.25rem;
        border: 2px solid ${({ theme }) => theme.colors.almostWhite};
        box-sizing: border-box;
        display: inline-block;
    }

    input:checked {
        background-color: ${({ theme }) => theme.colors.neonGreen};
        border-color: ${({ theme }) => theme.colors.neonGreen};
    }

    input:hover {
        border-color: ${({ theme }) => theme.colors.neonGreen};
    }

    svg {
        position: absolute;
        margin: 2.5px 0px 0px 3px;
        cursor: pointer;
        fill: ${({ theme }) => theme.colors.veryDarkGrey};
    }

    @media (max-width: 768px) {
        height: 12.25rem; //196px
        font-size: 1rem;

        .container-option {
            height: 2.063rem; //33px
        }

        .checkbox {
            margin-right: 1.25rem;
        }
    }
`;
