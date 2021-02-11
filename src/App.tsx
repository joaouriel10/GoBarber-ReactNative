import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalSyles from './styles/global';
import Routes from './routes';

const App: React.FC = () => (
  <>
    <BrowserRouter>
    <Routes />
    </BrowserRouter>
    <GlobalSyles />
  </>
)

export default App;
