import logo from './logo.svg';
import './App.css';
import About from './Pages/Home/About/About';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Shared/Footer/Footer';

function App() {
  return (

    <BrowserRouter>
     <Header />
      <Switch>
        <Route exact to="sdasd">
          <About></About>
        </Route>
      </Switch>
      <Footer/>
    </BrowserRouter>



  );
}

export default App;
