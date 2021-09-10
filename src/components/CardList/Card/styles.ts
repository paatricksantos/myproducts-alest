import styled from 'styled-components';

export const Container = styled.div`
  width: 220px;
  height: 310px;

  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 160px 110px 40px;

  grid-template-areas:
    'IMG'
    'CT'
    'ACT';

  background-color: #fafafa;

  border-radius: 6px;
  overflow: hidden;

  &:hover {
    box-shadow: 0px 6px 8px rgba(255, 187, 17, 0.5);
  }
`;

export const ImageContainer = styled.div`
  grid-area: IMG;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const Content = styled.div`
  grid-area: CT;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 16px;

  padding: 8px;
  border-left: 1px solid rgba(0, 0, 0, 0.2);
  border-right: 1px solid rgba(0, 0, 0, 0.2);

  p {
    color: #222;
    font-size: clamp(0.75rem, 1rem, 1.2rem);
    text-transform: uppercase;
    font-weight: bold;
  }

  span {
    opacity: 0.3;
    font-weight: bold;
  }
`;

export const Actions = styled.div`
  grid-area: ACT;
  background: red;
  display: flex;
  border-radius: 0 0 6px 6px;
  overflow: hidden;

  button {
    width: 100%;

    background: #fb1;
    color: #764701;
    transition: 0.1s;

    padding: 8px;
    font-size: 1.2rem;

    &:last-child {
      border-left: 1px solid;
    }

    &:hover {
      filter: brightness(120%);
    }

    &:disabled {
      opacity: 0.5;
      cursor: wait;
    }
  }
`;
