import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.primary.lighter};
  border-radius: 0.4rem;

  width: 450px;

  svg {
    height: 100%;
    padding: 0.6rem;
    width: 50px;
    background: ${({ theme }) => theme.colors.primary.main};
    color: white;
    text-align: center;

    border-radius: 0.4rem 0 0 0.4rem;
  }

  input {
    min-width: 50px;

    border: 2px solid transparent;
    border-left: none;
    display: block;
    width: 100%;
    font-size: 1rem;
    padding: 0.8rem;
    background: #eee;
    border-radius: 0 0.4rem 0.4rem 0;
    color: ${({ theme }) => theme.colors.primary.dark};

    transition: 0.2s;

    &::placeholder {
      color: ${({ theme }) => theme.colors.primary.dark};
      opacity: 0.5;
    }

    &:hover,
    &:focus {
      outline: none;
      border-color: ${({ theme }) => theme.colors.primary.main};
      background: white;
    }
  }
`;
