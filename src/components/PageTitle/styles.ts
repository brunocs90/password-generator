import styled from 'styled-components';

export const PageTitleContainer = styled.div`
    width: 33.75rem;
    height: 3.938rem;
    padding-bottom: 2rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${({ theme }) => theme.Typography.Heading_M['font-size']};
    font-weight: ${({ theme }) => theme.Typography.Heading_M['font-weight']};
    line-height: ${({ theme }) => theme.Typography.Heading_M['line-height']};
    color: ${({ theme }) => theme.colors.grey};

    //mobile
    @media (max-width: 768px) {
        width: 21.438rem;
        height: 2.313rem;
        padding-bottom: 1rem;
        font-size: 1rem;
        /* border: solid yellow; */
    }
`;
