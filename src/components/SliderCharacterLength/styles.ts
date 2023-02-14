import styled from 'styled-components';

export const SliderCharacterLengthContainer = styled.div`
    width: 100%;
    height: 5.438rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding-bottom: 1rem;

    /* border: solid red; */

    @media (max-width: 768px) {
        height: 4.188rem; //67px
        padding-bottom: 0rem;
    }
`;

export const PasswordCharacterLengthHeader = styled.div`
    width: 100%;
    height: 2.688rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    /* border: solid green; */

    .text {
        color: ${({ theme }) => theme.colors.almostWhite};
        font-size: ${({ theme }) => theme.Typography.Body_M['font-size']};
        font-weight: ${({ theme }) => theme.Typography.Body_M['font-weight']};
        line-height: ${({ theme }) => theme.Typography.Body_M['line-height']};
    }

    .number {
        color: ${({ theme }) => theme.colors.neonGreen};
        font-size: ${({ theme }) => theme.Typography.Heading_L['font-size']};
        font-weight: ${({ theme }) => theme.Typography.Heading_L['font-weight']};
        line-height: ${({ theme }) => theme.Typography.Heading_L['line-height']};
    }

    @media (max-width: 768px) {
        height: 1.938rem; //31px

        .text {
            font-size: 1rem;
        }

        .number {
            font-size: ${({ theme }) => theme.Typography.Heading_M['font-size']};
        }
    }
`;

export const PasswordSliderContainer = styled.div`
    width: 100%;
    height: 2.75rem;
    display: flex;
    flex-direction: column;
    padding-top: 1rem;
    justify-content: center;
    align-items: center;
    /* border: solid purple; */

    @media (max-width: 768px) {
        height: 2.25rem; //36px
    }
`;

export const PasswordSlider = styled.input.attrs({ type: 'range' })`
    /* https://www.smashingmagazine.com/2021/12/create-custom-range-input-consistent-browsers/ */
    width: 100%;
    -webkit-appearance: none;
    background: transparent;
    margin-bottom: 1rem;
    --value: ${props => props.value};
    --range: calc(var(--max) - var(--min));
    --ratio: calc((var(--value) - var(--min)) / var(--range));
    --sx: calc(0.5 * 2em + var(--ratio) * (100% - 2em));
    --min: ${props => props.min};
    --max: ${props => props.max};

    & progress {
        -webkit-appearance: none;
    }

    &:focus {
        outline: none;
    }

    /*=============== Styling the track ===============*/

    //Chrome
    &::-webkit-slider-runnable-track {
        background: ${props =>
            `linear-gradient(to right, #A4FFAF 0%, #A4FFAF ${Number(props.value) * 5}%, #18171F ${
                props.value
            }%, #18171F 100% )`};
        -webkit-appearance: none;
        height: 0.5rem;
    }

    &::-webkit-progress-value {
        background: orange;
    }

    &::-webkit-progress-bar {
        background: ${({ theme }) => theme.colors.neonGreen};
    }

    //Mozilla
    &::-moz-range-track {
        -webkit-appearance: none;
        background: ${({ theme }) => theme.colors.veryDarkGrey};
        height: 0.5rem;
    }

    &::-moz-range-progress {
        background-color: ${({ theme }) => theme.colors.neonGreen};
        height: 0.5rem;
    }

    &::-moz-progress-bar {
        background-color: blue;
        height: 0.5rem;
    }

    //IE - Edge
    &::-ms-track {
        -webkit-appearance: none;
        height: 0.5rem;
    }
    &::-ms-fill-lower {
        background: ${({ theme }) => theme.colors.neonGreen};
    }

    &::-ms-fill-lower {
        background: ${({ theme }) => theme.colors.veryDarkGrey};
    }

    /*=============== Styling the slider thumb ===============*/

    //Chrome
    &::-webkit-slider-thumb {
        -webkit-appearance: none;
        height: 1.75rem;
        width: 1.75rem;
        border-radius: 50%;
        background: ${({ theme }) => theme.colors.almostWhite};
        border-color: ${({ theme }) => theme.colors.almostWhite};
        margin-top: -8px;

        &:hover,
        &:active {
            cursor: pointer;
            background: ${({ theme }) => theme.colors.darkGrey};
            border: 2px solid ${({ theme }) => theme.colors.neonGreen};
        }
    }

    //Mozilla
    &::-moz-range-thumb {
        -webkit-appearance: none;
        height: 1.75rem;
        width: 1.75rem;
        border-radius: 50%;
        background: ${({ theme }) => theme.colors.almostWhite};
        border-color: ${({ theme }) => theme.colors.almostWhite};

        &:hover,
        &:active {
            cursor: pointer;
            background: ${({ theme }) => theme.colors.darkGrey};
            border: 2px solid ${({ theme }) => theme.colors.neonGreen};
        }
    }

    //IE - Edge
    &::-ms-thumb {
        -webkit-appearance: none;
        height: 1.75rem;
        width: 1.75rem;
        border-radius: 50%;
        background: ${({ theme }) => theme.colors.almostWhite};
        border-color: ${({ theme }) => theme.colors.almostWhite};

        &:hover,
        &:active {
            cursor: pointer;
            background: ${({ theme }) => theme.colors.darkGrey};
            border: 2px solid ${({ theme }) => theme.colors.neonGreen};
        }
    }
`;
