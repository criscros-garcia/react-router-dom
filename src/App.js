import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Eat from './Eat';
import Drink from './Drink';
import NavBar from './NavBar';

class App extends Component{
  render(){
    return(
      <div className="App">
        <NavBar/>
          <Switch>
            <Route exact path="/"      render={()=><Home/>}/>
            <Route exact path="/eat"   render={()=><Eat/>}/>
            <Route exact path="/drink" render={()=><Drink/>}/>
          </Switch>
      </div>      
    );
  }
}

export default App;