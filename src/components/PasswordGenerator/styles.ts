import styled from 'styled-components';

export const PasswordGeneratorContainer = styled.div`
	width: 100%;
	height: 33rem;
	margin-top: 1.5rem;
	padding: 1.5rem 2rem;

	display: flex;
	flex-direction: column;
	background-color: ${({ theme }) => theme.colors.darkGrey};

	/* border: solid blue; */
`;