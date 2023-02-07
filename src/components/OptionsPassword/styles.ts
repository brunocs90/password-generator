import styled from 'styled-components';

export const OptionsPasswordContainer = styled.div`
	width: 100%;
	color: ${({ theme }) => theme.colors.almostWhite};
	font-size: ${({ theme }) => theme.Typography.Body_M['font-size']};
	font-weight: ${({ theme }) => theme.Typography.Body_M['font-weight']};
	line-height: ${({ theme }) => theme.Typography.Body_M['line-height']};
	padding-bottom: 20px;
	/* border: solid blue; */

	.label {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: flex-start;
		/* border: solid green; */
	}

	.checkbox{
		margin-right: 1.5rem;
	}

	input {
		all: unset;
		width: 20px;
		height: 20px;
		border: 2px solid ${({ theme }) => theme.colors.almostWhite};
		box-sizing: border-box;
		display: inline-block;
	}

	input:checked{
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
`;