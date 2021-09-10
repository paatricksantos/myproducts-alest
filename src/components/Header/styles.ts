import styled from 'styled-components';

export const Container = styled.header`
  width: 100%;
  background: ${({ theme }) => theme.colors.primary.main};
  padding: 1rem 2rem;
  margin-bottom: 2rem;

  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    text-decoration: underline;
    color: ${({ theme }) => theme.colors.gray[900]};
    b {
      color: ${({ theme }) => theme.colors.primary.dark};
    }
  }
`;
