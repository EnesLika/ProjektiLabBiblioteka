import React from 'react';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import 'react-toastify/dist/ReactToastify.min.css';
import './app/layout/styles.css'
import App from './app/layout/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter} from 'react-router-dom';
import { ustore, UStoreContext } from './app/stores/ustore';


ReactDOM.render(
  <UStoreContext.Provider value={ustore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  </UStoreContext.Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
