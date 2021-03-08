import {BrowserRouter, Switch,Route} from 'react-router-dom';

import SignIn from './pages/signin/signin.component';
import Toolbar from './components/toolbar/toolbar.component';
import Page from './pages/anotherpage/page.component';

import './App.css';

const App = props  =>{
  return (
    <div className="App">
      <BrowserRouter>
      <Toolbar/>
      <Switch>
        <Route exact path='/'  component={SignIn}/>
        <Route exact path='/p'  component={Page}/>
        <Route exact path='/signin'  component={SignIn}/>
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
