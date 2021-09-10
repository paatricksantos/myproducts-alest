import styled from 'styled-components';

export const Overlay = styled.div`
  width: 100%;
  height: 100%;

  position: fixed;
  left: 0;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
`;

export const Container = styled.form<{ danger?: boolean }>`
  width: 100%;
  max-width: 450px;

  background: #fff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.04);

  padding: 24px;

  border-radius: 4px;

  h1 {
    font-size: 22px;
    color: ${({ theme }) => theme.colors.primary.dark};
  }

  p {
    margin-top: 8px;
  }
`;

export const Footer = styled.footer`
  margin-top: 32px;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  button {
    font-size: 1.2rem;
    cursor: pointer;
    border: none;
    border-radius: 0.4rem;
    background: ${({ theme }) => theme.colors.primary.main};
    color: ${({ theme }) => theme.colors.primary.dark};
    min-width: 8rem;
    padding: 0.8rem 1.2rem;
    box-sizing: border-box;
    transition: 0.1s;

    &:hover {
      outline: none;
      box-shadow: 0 0 0 3px #fea,
        0 0 0 4px ${({ theme }) => theme.colors.primary.main};
    }

    &:disabled {
      opacity: 0.5;
      cursor: wait;
    }
  }

  .cancel-button {
    font-size: 16px;
    background: transparent;

    border: 0;
    margin-right: 8px;
  }
`;

export const InputField = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;

  font-size: 1.25rem;
  margin-top: 16px;

  input {
    min-width: 50px;

    border: 2px solid transparent;
    display: block;
    width: 100%;
    font-size: 1rem;
    padding: 0.8rem;
    background: #eee;
    border-radius: 0.4rem;
    color: ${({ theme }) => theme.colors.primary.dark};

    transition: 0.2s;

    &:hover,
    &:focus {
      outline: none;
      border-color: #fb1;
      background: white;
    }
  }

  .input-price {
    display: flex;
    align-items: center;

    input {
      border-radius: 0 0.4rem 0.4rem 0;
      border-left: none;
    }

    span {
      height: 100%;
      padding: 0.6rem;
      background: ${({ theme }) => theme.colors.primary.main};
      border: 2px solid ${({ theme }) => theme.colors.primary.main};
      border-radius: 0.4rem 0 0 0.4rem;
    }
  }
`;

export const InputFile = styled.label`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  width: 180px;
  height: 180px;

  background: #eee;
  border: 5px dashed ${({ theme }) => theme.colors.primary.main};
  border-radius: 50%;

  margin: 30px auto;

  cursor: pointer;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }

  input {
    display: none;
  }
`;
