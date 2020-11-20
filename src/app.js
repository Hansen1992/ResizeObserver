import React from 'react';
import ReactDOM from 'react-dom';
import MobileImageResize from './components/MobileImageResize';
import './styles/styles.scss';

const App = () => {
  return (
    <div>
      <MobileImageResize />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
