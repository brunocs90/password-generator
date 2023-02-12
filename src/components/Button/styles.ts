import styled from 'styled-components';

export const ButtonContainer = styled.button`
	width: 100%;
	padding-top: 2rem;
	background-color: ${({ theme }) => theme.colors.darkGrey};;

	.primary-button {
		width: 100%;
		height: 65px;
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-items: center;

		background-color: ${({ theme }) => theme.colors.neonGreen};
		font-size: ${({ theme }) => theme.Typography.Body_M['font-size']};
		font-weight: ${({ theme }) => theme.Typography.Body_M['font-weight']};
		line-height: ${({ theme }) => theme.Typography.Body_M['line-height']};
		color: ${({ theme }) => theme.colors.darkGrey};;
		border: none;
		text-transform: uppercase;
		cursor: pointer;
		border: 2px solid ${({ theme }) => theme.colors.neonGreen};
		box-sizing: border-box;

		.arrow-icon{
			padding-left: 1.5rem;
		}

		&:hover:not([disabled]) {
			color: ${({ theme }) => theme.colors.neonGreen};
			background-color: ${({ theme }) => theme.colors.darkGrey};
			fill: ${({ theme }) => theme.colors.neonGreen};

			& svg path {
				fill: ${({ theme }) => theme.colors.neonGreen};
			}
		}

		&:disabled{
			background-color: ${({ theme }) => theme.colors.almostWhite};
			border: none;
			cursor: not-allowed;
		}
	}
`;