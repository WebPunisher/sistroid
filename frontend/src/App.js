import {BrowserRouter, Switch,Route} from 'react-router-dom';

import SignIn from './pages/signin/signin.component';
import Toolbar from './components/toolbar/toolbar.component';
import HomePage from './pages/anotherpage/page.component';

import './App.css';

const App = props  =>{
  return (
    <div className="App">
      <BrowserRouter>
      <Toolbar/>
      <Switch>
        <Route exact path='/'  component={HomePage}/>
        <Route exact path='/sign'  component={SignIn}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
