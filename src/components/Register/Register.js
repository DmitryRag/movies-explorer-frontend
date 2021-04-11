import './Register.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Input from '../Input/Input'
import linkonpage from '../../images/logo_titlepage.svg'

function Register({onSubmitRegister}) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [nameError, setNameError] = useState('')
    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')

    const [nameValidity, setNameValidity] = useState(false)    
    const [emailValidity, setEmailValidity] = useState(false)
    const [passwordValidity, setPasswordValidity] = useState(false)

    const isDisabledButton = !nameValidity || !emailValidity || !passwordValidity

    function handleChangeName(e) {
        setName(e.target.value)
        setNameError(e.target.validationMessage)
        setNameValidity(e.target.validity.valid)
    }
    
    function handleChangeEmail(e) {
        setEmail(e.target.value)
        setEmailError(e.target.validationMessage)
        setEmailValidity(e.target.validity.valid)
    }
    
    function handleChangePassword(e) {
        setPassword(e.target.value)
        setPasswordError(e.target.validationMessage)
        setPasswordValidity(e.target.validity.valid)
    }

    function handleSubmitForm(e) { 
        e.preventDefault()
        onSubmitRegister(name, email, password)
    }

    return (
        <section className='register'>
            <form className='register__form' onSubmit={handleSubmitForm} id='register' name='register'>
                <fieldset className='register__block'>
                    <Link to='/' className='register__title-link'>
                        <img className='register__link-titlepage' src={linkonpage} alt='картинка-ссылка на главную страницу'></img>
                    </Link>
                    <h1 className='register__title'>Добро пожаловать!</h1>
                    <Input 
                        id='name'
                        name='name'
                        type='text'
                        placeholder='Имя'
                        minlength='2' 
                        maxlength='30'
                        value={name}
                        onChange={handleChangeName}
                        error={nameError}
                    />
                    <Input 
                        id='email'
                        name='email'
                        type='email'
                        placeholder='E-mail'
                        minLength='5'
                        maxLength='30'
                        value={email}
                        onChange={handleChangeEmail}
                        error={emailError}
                    />
                    <Input 
                        id='password'
                        name='password'
                        type='password'
                        placeholder='Пароль'
                        minLength='5'
                        value={password}
                        onChange={handleChangePassword}
                        error={passwordError}
                    />
                </fieldset>
                <button className={`register__button ${isDisabledButton ? 'register__button_disabled' : ''}`} form='register' type='submit' disabled={isDisabledButton}>Зарегистрироваться</button>
                <div className='register__link-block'>
                    <p className='register__subtitle'>Уже зарегистрированы?</p>
                    <Link to='signin' className='register__link'>Войти</Link>
                </div>
            </form>
        </section>
    )
}

export default Register