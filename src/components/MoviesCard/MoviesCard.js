import './MoviesCard.css'

function MoviesCard({savedMovies, movie, onBookmarkClick, isSavedMovie }) {
    const { nameRU, duration, trailer, image } = movie
    let isSaved = isSavedMovie(movie)
    
    function durationFormat(duration) {
        const hh = Math.trunc(duration / 60)
        const mm = duration % 60
        return `${hh>0 ? hh+'ч ' : ''}${mm}м`
    }

    function handleBookmarkClick(evt) {
        evt.preventDefault()
        onBookmarkClick(movie, !isSaved)
    }

    function handleOnDelete() {
        onBookmarkClick(movie, false)
    }

    return (
        <article className='card'>
            <a href={trailer} target='_blank' rel='noopener noreferrer'>
                <img src={image} alt='Постер к фильму' className='card__poster' />
            </a>
            <div className='card__info'>
                <div className='card__subinfo'>
                    <p className='card__description'>{nameRU}</p>
                    <p className='card__duration'>{durationFormat(duration)}</p>
                </div>
                { savedMovies ? 
                    (<button className='card__action_delete' type='button' onClick={handleOnDelete}></button>)
                : 
                    (<button className={`card__action ${isSaved && 'card__action_save'}`} type='button' onClick={handleBookmarkClick}></button>)
                }
            </div>
        </article>
    )
}
        
export default MoviesCard