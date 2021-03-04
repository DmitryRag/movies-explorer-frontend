import React from 'react'
import './Movies.css'
import SearchForm from '../SearchForm/SearchForm'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import Preloader from '../Preloader/Preloader'
import MoviesCardList from '../MoviesCardList/MoviesCardList'

function Movies(props) {
    const [isLoaded, setIsLoaded] = React.useState(false)

    React.useEffect(() => {
      setTimeout(() => {
        setIsLoaded(true)
      }, 2000)
    })

    return(
        <section className='movies'>
            <Header loggedIn={true} />
            <SearchForm />
            {!isLoaded && (<Preloader />)}
            {isLoaded && (<MoviesCardList saved={props.saved} />)}
            <Footer />
        </section>
    )    
}

export default Movies