import styled from 'styled-components';

export const PageTitleContainer = styled.div`
    width: 33.75rem;
    padding-bottom: 1.875rem;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: ${({ theme }) => theme.Typography.Heading_M['font-size']};
    font-weight: ${({ theme }) => theme.Typography.Heading_M['font-weight']};
    line-height: ${({ theme }) => theme.Typography.Heading_M['line-height']};
    color: ${({ theme }) => theme.colors.grey};

    border: solid blue;
`;