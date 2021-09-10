import React from 'react';
import ReactDOM from 'react-dom';

import { Overlay } from './styles';

const Loading: React.FC<{ isLoading: boolean }> = ({ isLoading }) => {
  if (!isLoading) return null;
  return ReactDOM.createPortal(
    <Overlay>
      <div className="loader" />
    </Overlay>,
    document.getElementById('portal-root') || document.body,
  );
};

export default Loading;
