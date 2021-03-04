import React from 'react'
import './MoviesCardList.css'
import poster1 from '../../images/poster-1.jpg'
import poster2 from '../../images/poster-2.jpg'
import MoviesCard from '../MoviesCard/MoviesCard'

function MoviesCardList(props) {
    const movies = Array.from({ length: props.saved ? 4 : 16 }, (v, k) => k);

    return (
        <section className="movies-card-list section">
            <div className="movies-card-list__container">
                {movies.map((value, index) => (
                    <MoviesCard key={index}
                    poster={index % 6 === 0 ? poster1 : poster2}
                    actionState={props.saved ? 'movies-card__action_type_delete'
                    : index % 2 === 0 ? 'movies-card__action_type_unsave' : 'movies-card__action_type_save'} />
                ))}
            </div>
            {!props.saved && (<button type="button" className="movies-card-list__more">Ещё</button>)}
        </section>
    )
}

export default MoviesCardList