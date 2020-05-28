import React, { useState, useEffect } from 'react';

import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

// MATERIAL UI //
import { MuiThemeProvider } from '@material-ui/core/styles';
import theme from './components/Theme/Theme';

import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

// COMPONENTS //
import Header from './components/Header/Header';
import PageTitle from './components/PageTitle/PageTitle';
import Footer from './components/Footer/Footer';
import Error from './components/Error/Error';

// PAGES //
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import HomePage from './pages/HomePage/HomePage';
import AboutPage from './pages/AboutPage/AboutPage';
import BrowsePage from './pages/BrowsePage/BrowsePage';
import SearchPage from './pages/SearchPage/SearchPage';
import PolicyPage from './pages/PolicyPage/PolicyPage';
import ContactPage from './pages/ContactPage/ContactPage';
import { Catalog } from './models/Catalog/Catalog';

// MATERIAL-UI STYLES //
const useStyles = makeStyles({
  container: {
    margin: '20px auto 50px',
  }
});

// REACT COMPONENT //
const App: React.FC = (): JSX.Element => {
 
  // STATES //
  const [error, setError] = useState<boolean>(false);

  // OTHER INIT VARIABLES //
  const classes = useStyles();

  // HOOKS
  useEffect(() => {

  }, []);

  // CONTENT //
  let content = (
    <Switch>
      <Route exact path='/' component={HomePage} />
      <Route exact path='/search' component={SearchPage} />
      <Route exact path='/browse' render={(props) => <BrowsePage/>} />
      <Route exact path='/about' component={AboutPage} />      
      <Route exact path='/policy' component={PolicyPage} />
      <Route exact path='/contact' component={ContactPage} />
      <Route path='/404' component={NotFoundPage} />
      <Redirect to='/404' />
    </Switch>
  );

  if (error) {
    content = <Error />;
  }


  // RETURN //
  return (
    <MuiThemeProvider theme={theme}>
      <BrowserRouter>
        <CssBaseline>
          <Header />
          <Container maxWidth="xl" className={classes.container}>
            <PageTitle />
            {content}
          </Container>
          <Footer />
        </CssBaseline>
      </BrowserRouter>
    </MuiThemeProvider>
  );

}

export default App;
