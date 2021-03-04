import { Link } from 'react-router-dom'
import './Register.css'
import Input from '../Input/Input'
import linkonpage from '../../images/logo_titlepage.svg'

function Register() {
    return (
        <section className='register'>
            <form className='register__form'>
                <fieldset className='register__block'>
                    <Link to='/' className='register__title-link'>
                        <img className='register__link-titlepage' src={linkonpage} alt='картинка-ссылка на главную страницу'></img>
                    </Link>
                    <h1 className='register__title'>Добро пожаловать!</h1>
                    <Input name={'Имя'} type={'text'} minlength={'2'} maxlength={'30'} />
                    <Input name={'E-mail'} type={'email'} />
                    <Input name={'Пароль'} type={'password'} minlength={'8'} />
                </fieldset>
                <button type='submit'
                    className='register__button register__button_disabled'>Зарегистрироваться</button>
                <div className='register__link-block'>
                    <p className='register__subtitle'>Уже зарегистрированы?</p>
                    <Link to='signin' className='register__link'>Войти</Link>
                </div>
            </form>
        </section>
    )
}

export default Register