import React from 'react'
import Navbar from './Navbar'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Form from './Form'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/postpage' component={Form} />
          <Route path='/about' component={About} />
      </Switch>
    </div>
  );
}

export default App;
