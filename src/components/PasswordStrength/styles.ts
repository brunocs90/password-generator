import styled from 'styled-components';

export const PasswordStrengthContainer = styled.div`
	width: 100%;
	height: 4.5rem;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	background-color: ${({ theme }) => theme.colors.veryDarkGrey};
    padding: 0.75rem 1.5rem;

	border: solid red;

	.strength-text{
		color: ${({ theme }) => theme.colors.grey};
		font-size: ${({ theme }) => theme.Typography.Body_M['font-size']};
		font-weight: ${({ theme }) => theme.Typography.Body_M['font-weight']};
		line-height: ${({ theme }) => theme.Typography.Body_M['line-height']};
	}

	.gauge-container{
		display: flex;
		flex-direction: row;
		justify-items: center;
		align-items: center;
		/* border: solid yellow; */
	}

	.gauge-text{
		text-transform: uppercase;
		color: ${({ theme }) => theme.colors.almostWhite};
		font-size: ${({ theme }) => theme.Typography.Heading_M['font-size']};
		font-weight: ${({ theme }) => theme.Typography.Heading_M['font-weight']};
		line-height: ${({ theme }) => theme.Typography.Heading_M['line-height']};
		padding-right: 0.75rem;
	}

	.strength-gauge {
		display: block;
		width: 0.65rem;
		height: 1.75rem;
		margin-right: 0.4rem;
		border: 2px solid ${({ theme }) => theme.colors.almostWhite};
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

	button{
		width: 0.64rem;
		height: 1.74rem;
		margin-right: 0.4rem;
		background-color: transparent;
		background-image: none;
	}
`;