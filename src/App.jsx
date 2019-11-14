import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

// Import Component
import Header from './Components/Header'
import List from './Pages/List'
import Detail from './Pages/List/Detail'

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={List} />
        <Route path="/detail/:name" exact component={Detail} />
        <Redirect to="/" />
      </Switch>
    </div>
  )
}

export default App
