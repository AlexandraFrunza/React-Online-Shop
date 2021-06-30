import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Navbar, Footer } from './components'


import {Home, Products, SingleProduct,Cart, Error, Signup, Login, Profile, PrivateRoute, Update} from './pages'

function App() {
  return (
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/products' component={Products}/>
        <Route exact path='/cart' component={Cart}/>
        <Route exact path='/products/:id' children={<SingleProduct />}/>
        <Route exact path='/signup' component={Signup}/>
        <Route exact path='/login' component={Login}/>
        <PrivateRoute exact path='/update' component={Update}/>
        <PrivateRoute exact path='/profile' component={Profile}/>
        <Route exact path='*' component={Error}/>
      </Switch>
      <Footer/> 
    </Router>
  )
}

export default App