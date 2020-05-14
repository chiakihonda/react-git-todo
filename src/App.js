import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import List from "./pages/list";
import Set from "./pages/set";

class App extends React.Component{
  render(){
    return(
      <List/>
    );
  }
}

class Appp extends React.Component {
  render() {
    return (
      <BrowserRouter>
      <div>
        <Switch>
          <Route exact path='/'component={List} />
          <Route path='/set' component={Set} />
        </Switch>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;