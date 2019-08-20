import React from 'react'

import {Switch, Route} from 'react-router-dom'

import Student from './components/Student/Student'
import Home from './components/Home/Home'
import About from './components/About/About'
import ClassList from './components/ClassList/ClassList'

export default (
    <Switch>
        <Route component={Home} exact path='/'></Route>
        <Route component={About} path='/about'></Route>
        <Route component={ClassList} path ='/classlist/:class'></Route>
        <Route component={Student} path='/student/:id'></Route>
    </Switch>
)
 