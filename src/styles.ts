import styled from 'styled-components';

export const PageContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

export const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 33.75rem;
    height: 43.438rem;

    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 21.438rem;
        height: 33.75rem;
    }
`;