import styled from 'styled-components';

export const Container = styled.div`
  margin: 0 auto;
  width: 400px;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;

  button {
    width: 300px;
    display: flex;
    align-items: center;
    gap: 16px;

    color: #fff;
    background: #fb1;
    border: 0;

    height: 50px;
    border-radius: 8px;
    padding: 0 16px;

    &:hover {
      outline: none;
      box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;
    }

    &:disabled {
      opacity: 0.5;
      cursor: wait;
    }

    span {
      font-size: 1.25rem;
      font-weight: 500;
    }
  }

  form {
    button {
      margin-top: 1rem;
      justify-content: center;
      font-size: 1.3rem;
      font-weight: bold;
    }
  }

  padding-bottom: 2rem;
`;

export const InputField = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;

  font-size: 1rem;
  margin-top: 16px;

  .input-container {
    display: flex;

    background: #eee;
    border-radius: 0.4rem;

    span {
      height: 100%;
      padding: 0.8rem;
      font-size: 1.25rem;
      width: 50px;
      background: #fb1;
      color: white;
      text-align: center;

      border-radius: 0.4rem 0 0 0.4rem;
    }

    svg {
      height: 100%;
      padding: 0.6rem;
      width: 50px;
      background: #fb1;
      color: white;
      text-align: center;

      border-radius: 0.4rem 0 0 0.4rem;
    }

    input {
      border: 2px solid transparent;
      border-left: none;

      flex: 1;
      font-size: 1rem;
      padding: 0.8rem;
      background: #eee;
      border-radius: 0 0.4rem 0.4rem 0;
      color: #764701;

      transition: 0.2s;

      &::placeholder {
        color: #764701;
        opacity: 0.5;
      }

      &:hover,
      &:focus {
        outline: none;
        border-color: #fb1;
        background: white;
      }
    }
  }
`;
