import styled from 'styled-components';

export const GeneratedPasswordContainer = styled.div`
    width: 100%;
    background-color: ${({ theme }) => theme.colors.darkGrey};
    padding: 1.5rem 2rem;
    min-height: 4rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 33.75rem;

    .show {
        visibility: visible;
    }

    .hidden {
        visibility: hidden;
    }

    .password-placeholder {
        color: ${({ theme }) => theme.colors.grey};
        font-size: ${({ theme }) => theme.Typography.Heading_L['font-size']};
    }

    .generated-password {
        color: ${({ theme }) => theme.colors.almostWhite};
        font-size: ${({ theme }) => theme.Typography.Heading_L['font-size']};
    }

    .copy-icon {
      display: flex;
      gap: 1rem;
      align-items: center;

      svg {
        cursor: pointer;
      }

      svg:hover path {
        fill: ${({ theme }) => theme.colors.almostWhite};
      }

      #copied-label {
        color: ${({ theme }) => theme.colors.neonGreen};
        font-size: ${({ theme }) => theme.Typography.Body_M['font-size']};
      }
    }
`;