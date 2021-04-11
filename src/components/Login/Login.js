import './Login.css'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import Input from '../Input/Input'
import linkonpage from '../../images/logo_titlepage.svg'

function Login({onSubmitLogin}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [emailError, setEmailError] = useState('')
    const [passwordError, setPasswordError] = useState('')
 
    const [emailValidity, setEmailValidity] = useState(false)
    const [passwordValidity, setPasswordValidity] = useState(false)

    const isDisabledButton = !emailValidity || !passwordValidity

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
        onSubmitLogin(email, password)
    }

    return (
        <section className='login'>
            <form className='login__form' name='login' id='login' onSubmit={handleSubmitForm}>
                <fieldset className='login__block'>
                    <Link to='/' className='login__title-link'>
                        <img className='login__link-titlepage' src={linkonpage} alt='картинка-ссылка на главную страницу'></img>
                    </Link>
                    <h1 className='login__title'>Рады видеть!</h1>
                    <Input 
                        id='email'
                        name='email'
                        type='email'
                        placeholder='E-mail'
                        minLength='5'
                        error={emailError}
                        onChange={handleChangeEmail}
                    />
                    <Input 
                        id='password'
                        name='password'
                        type='password'
                        placeholder='Пароль'
                        minLength='5'
                        errorText={passwordError}
                        onChange={handleChangePassword}
                    />
                </fieldset>
                <button className={`login__button ${isDisabledButton ? 'login__button_disabled' : ''}`} type='submit' form='login' disabled={isDisabledButton}>Войти</button>
                <div className='login__link-block'>
                    <p className='login__subtitle'>Ещё не зарегистрированы?</p>
                    <Link to='signup' className='login__link'>Регистрация</Link>
                </div>
            </form>
        </section>
    )
}

export default Login