import './Profile.css'
import React from 'react'
import {CurrentUserContext} from '../../contexts/CurrentUserContext'
import { getErrorText, checkValid } from '../../utils/helpers'

function Profile({onSaveProfile, onSignOut}) {
    const currentUser = React.useContext(CurrentUserContext)
    const [isNameValid, setIsNameValid] = React.useState(false)
    const [isEmailValid, setIsEmailValid] = React.useState(false)
    const [formValues, setFormValues] = React.useState({name: '', email: ''})
    const [errors, setErrors] = React.useState({name: {required: ''}, email: {isEmail: ''}})

    React.useEffect(() => {
        setFormValues({
            ...formValues,
            name: currentUser.name || '',
            email: currentUser.email || ''
        })
    }, [currentUser])
    
    function handleInputChange(e) {
        const { name, value } = e.target
        setFormValues({
          ...formValues,
          [name] : value 
        })
    }
    
    React.useEffect(() => {
        const { name, email } = formValues
        const nameValid = checkValid('name', name)
        const emailValid = checkValid('email', email)
        setErrors({
            name: nameValid,
            email: emailValid,
        })
        setIsNameValid(Object.values(nameValid).every((item) => item === ''))
        setIsEmailValid(Object.values(emailValid).every((item) => item === ''))
    }, [formValues])
    

    function handleSignOut() {
        onSignOut()
    }

    function handleSubmitForm(e) {
        e.preventDefault()
        onSaveProfile(formValues)
    }

    return (
        <section className='profile'>
            <h1 className='profile__title'>{`Привет, ${currentUser.name}!`}</h1>
            <form className='profile__form' id='profile' name='profile' onSubmit={handleSubmitForm}>
                {!isNameValid && <span className='profile__error'>{getErrorText(errors.name)}</span>}
                <label className='profile__label'>Имя
                    <input 
                        className='profile__input profile__input_error' 
                        id='name'
                        name='name'
                        type='text' 
                        value={formValues.name} 
                        minLength='2' 
                        maxLength='30' 
                        required
                        onChange={handleInputChange}
                        />
                </label>
                <div className='profile__line' />
                <label className='profile__label'>Почта
                    <input 
                        className='profile__input' 
                        id='email'
                        name='email'
                        type='email' 
                        value={formValues.email} 
                        minLength='5'
                        maxLength='30'
                        required
                        onChange={handleInputChange}
                    />
                </label>
                {!isEmailValid && <span className='profile__error'>{getErrorText(errors.email)}</span>}
                <div className='profile__button-zone'>
                    <button type='submit' className='profile__button'>Редактировать</button>
                    <button className='profile__button profile__button_color' onClick={handleSignOut}>Выйти из аккаунта</button>
                </div>
            </form>
        </section>
    )
}

export default Profile