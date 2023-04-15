import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import ContextProvider from './context/DataProvider';
import { Provider } from 'react-redux';
import store from './redux/store/store'
import { createTheme, ThemeProvider } from '@mui/material';

const theme = createTheme()
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<ThemeProvider theme={theme}>
<Provider store={store}> 
<BrowserRouter>
<ContextProvider>
   <React.StrictMode>
    <App />
  </React.StrictMode>
  </ContextProvider>
  </BrowserRouter>
</Provider>
</ThemeProvider>


 

 
);

