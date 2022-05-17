import logo from './logo.svg';
import './App.css';
import React  from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom'
import Register from './Register';
function App() {


  return (
    <BrowserRouter>
     <Switch>
      <Route path="/" component={Register} exact />
     </Switch>
    </BrowserRouter>
  );
}

export default App;
