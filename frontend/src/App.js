import {BrowserRouter, Switch,Route} from 'react-router-dom';

import SignIn from './pages/sign/signin.component';
import SignUp from './pages/sign/signup.component';
import HomePage from './pages/anotherpage/homepage.component';
import Dashboard from './pages/dashboard/dashboard.component';
import ScrollToTop from './components/ScrollToTop.component';

// core styles
import "./scss/volt.scss";

// vendor styles
import "@fortawesome/fontawesome-free/css/all.css";
import "react-datetime/css/react-datetime.css";

import './App.css';

const App = props  =>{
  
  return (
    <div className="App">
      <BrowserRouter>
      <ScrollToTop/>
      <Switch>
        <Route exact path='/'  component={HomePage}/>
        <Route exact path='/signin'  component={SignIn}/>
        <Route exact path='/signup'  component={SignUp}/>
        <Route path='/dashboard/'  component={Dashboard}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
