import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider, Helmet } from 'react-helmet-async';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

import getTheme from './theme/theme';
import Layout from './layout/Layout';
import Home from './pages/Home';

const App = (): JSX.Element => {  
  return (
    <HelmetProvider>
      <Helmet 
        titleTemplate="%s | Yanken Labs"
        defaultTitle="Yanken Labs"
      />
      <ThemeProvider theme={getTheme()}>
        <CssBaseline />
        <BrowserRouter>
          <Layout>
            <Routes>
              <Route path='/' element={<Home />} />
            </Routes>
          </Layout>
        </BrowserRouter>
      </ThemeProvider>
    </HelmetProvider>
  );
};

export default App;