import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'

// Import Component
import Header from './Components/Header/index'
import List from './Pages/List/index'

const App = () => {
  return (
    <div>
      <Header />
      <Switch>
        <Route path="/" exact component={List} />
        <Redirect to="/" />
      </Switch>
    </div>
  )
}

export default App
