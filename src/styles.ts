import styled from 'styled-components';

export const PageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border: solid green;
`;

export const PageTitle = styled.div`
    width: 33.75rem;
    height: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${({ theme }) => theme.Typography.Heading_M['font-size']};
    font-weight: ${({ theme }) => theme.Typography.Heading_M['font-weight']};
    line-height: ${({ theme }) => theme.Typography.Heading_M['line-height']};
    color: ${({ theme }) => theme.colors.grey};
    padding: 2rem 0rem 2rem 0rem;
    border: solid blue;
`;

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 33.75rem;
    height: 39.5rem;
    border: solid red;
`;