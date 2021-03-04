import './MoviesCard.css'

function MoviesCard(props) {
    return (
        <article className='movies-card'>
            <img src={props.poster} alt='Постер к фильму' className='movies-card__poster' />
            <div className='movies-card__info'>
                <div className='movies-card__subinfo'>
                    <p className='movies-card__description'>33 slovq o designe</p>
                    <p className='movies-card__duration'>1h42min</p>
                </div>
                <button type='button' className={`movies-card__action ${props.actionState}`} />
            </div>
        </article>
    )
}
        
export default MoviesCard