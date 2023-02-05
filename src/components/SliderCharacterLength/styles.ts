import styled from 'styled-components';

export const SliderCharacterLengthContainer = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	border: solid brown;
`;

export const ContentContainer = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	justify-content: space-between;
	align-items: center;
	border: solid yellow;

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
`;