import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Navigator from './components/Navigator'
import Customers from './components/Customers'
import Trainings from './components/Trainings'

function App() {

  return (
    <div>
      <BrowserRouter>
        <div>
          <Navigator />
          <Switch>
            <Route exact path="/" component={Customers} />
            <Route path="/trainings" component={Trainings} />
            <Route render={() => <h1>Page not found</h1>} />
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default App;
