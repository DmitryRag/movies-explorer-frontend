import './SearchForm.css'
import React from 'react'

function SearchForm({onSubmitSearch, isLoading, onFilterShort}) {
    const [query, setQuery] = React.useState('')
    const [isSubmitDisabled, setIsSubmitDisabled] = React.useState(false)
  
    function handleFilterChange(e) {
        onFilterShort(e.target.checked)
    }

    function handleOnChange(e) {
        setQuery(e.target.value)
    }

    function handleOnSubmit(e) {
        e.preventDefault()
        onSubmitSearch(query)
    }

    React.useEffect(() => {
        setIsSubmitDisabled(query === '')
    }, [query])

    return (
        <section className='search-form section'>
            <form name='search-form' className='search-form__container' onSubmit={handleOnSubmit}>
                <div className='search-form__bar'>
                    <input type='text' placeholder='Фильм' minLength='1' className='search-form__input' onChange={handleOnChange} disabled={isLoading}/>
                    <button type='submit' className={`search-form__submit ${isSubmitDisabled && 'search-form__submit_disabled'}`} disabled={isSubmitDisabled || isLoading}>Найти</button>
                </div>
                <label className='search-form__filter-container'>Короткометражки
                    <input type='checkbox' className='search-form__filter-checkbox' onChange={handleFilterChange}/>
                    <span className='search-form__filter-checkmark'></span>
                </label>
            </form>
        </section>
    )
}

export default SearchForm