import './Login.css'
import { Link } from 'react-router-dom'
import Input from '../Input/Input'
import linkonpage from '../../images/logo_titlepage.svg'

function Login() {
    return (
        <section className='login'>
            <form className='login__form'>
                <fieldset className='login__block'>
                    <Link to='/' className='login__title-link'>
                        <img className='login__link-titlepage' src={linkonpage} alt='картинка-ссылка на главную страницу'></img>
                    </Link>
                    <h1 className='login__title'>Рады видеть!</h1>
                    <Input name={'E-mail'} type={'email'} />
                    <Input name={'Пароль'} type={'password'} minlength={'8'} />
                </fieldset>
                <button type='submit' className='login__button'>Войти</button>
                <div className='login__link-block'>
                    <p className='login__subtitle'>Ещё не зарегистрированы?</p>
                    <Link to='signup' className='login__link'>Регистрация</Link>
                </div>
            </form>
        </section>
    )
}

export default Login