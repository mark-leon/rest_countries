import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Themeprovider } from './Components/Context/Themecontext';


ReactDOM.render(
  <React.StrictMode>
    <Themeprovider>
      <App />
    </Themeprovider>
  </React.StrictMode>,
  document.getElementById('root')
);


