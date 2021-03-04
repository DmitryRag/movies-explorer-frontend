import React from 'react'
import './App.css'
import { Route, Switch } from 'react-router-dom'
import Main from '../Main/Main'
import Login from '../Login/Login'
import Register from '../Register/Register'
import Profile from '../Profile/Profile'
import Footer from '../Footer/Footer'
import PageNotFound from '../NotFound/NotFound'
import Header from '../Header/Header'
import Movies from '../Movies/Movies'

function App() {

    return (
        <div className='page'>
            <Switch>
                <Route exact path='/'>
                    <Main />
                    <Footer />
                </Route>
                <Route path='/movies'>
                    <Movies />
                </Route>
                <Route path='/saved-movies'>
                    <Movies saved={true} />
                </Route>
                <Route path='/profile'> 
                    <Header loggedIn={true} />                       
                    <Profile />
                </Route>
                <Route path='/signup'>
                    <Register />
                </Route>
                <Route path='/signin'>
                    <Login />
                </Route>
                <Route path='/*'>
                    <PageNotFound />
                </Route>
            </Switch>
        </div>
    )
}

export default App