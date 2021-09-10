import styled from 'styled-components';

export const Container = styled.main`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;

  padding: 0 1rem;

  display: flex;
  flex-direction: column;
  align-items: center;

  gap: 2rem;
`;

export const TopSection = styled.div`
  width: 100%;
  /* max-width: 80vw; */
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
`;

export const Button = styled.button`
  display: flex;
  gap: 8px;
  font-size: 1.2rem;
  cursor: pointer;
  border: none;
  border-radius: 0.4rem;
  background: #fb1;
  color: #764701;
  min-width: 8rem;
  padding: 0.8rem 1.2rem;
  box-sizing: border-box;
  transition: 0.1s;

  &:hover {
    outline: none;
    box-shadow: 0 0 0 3px #fea, 0 0 0 4px #fb1;
  }

  &:disabled {
    opacity: 0.5;
    cursor: wait;
  }
`;
