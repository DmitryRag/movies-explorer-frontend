import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import './Header.css'
import logo from '../../images/logo_titlepage.svg'

function Header({loggedIn}) {
    const [menuIsOpen, setMenuIsOpen] = React.useState(false)
    const location = useLocation()
    
    function handleOpenMenu() {
        setMenuIsOpen(true)
    }

    function handleCloseMenu() {
        setMenuIsOpen(false)
    }

    return(
        <header className={'header header' + (location.pathname === '/' ? '__main' : '') }>
            <NavLink to='/' className='logo'><img src={logo} alt='Логотип'/></NavLink>
            <div className='header__container'> 
                <nav className={`header__auth ${loggedIn && 'header__auth_hidden'}`}>
                    <NavLink to='/signup' className='header__signup'>Регистрация</NavLink>
                    <NavLink to='/signin' className='header__signin'>Войти</NavLink>
                </nav>
                <div className={`header__cover ${!loggedIn && 'header__cover_hidden'} 
                    ${!menuIsOpen  && 'header__cover_close'}`}>
                    <nav className='header__menu'>
                        {menuIsOpen  && (<NavLink to='/' className='header__menu-item' onClick={handleCloseMenu}>Главная</NavLink>)}
                        <NavLink to='/movies' className='header__menu-item' activeClassName='header__menu-item_active' onClick={handleCloseMenu}>Фильмы</NavLink>
                        <NavLink to='/saved-movies' className='header__menu-item' activeClassName='header__menu-item_active' onClick={handleCloseMenu}>Сохранённые фильмы</NavLink>
                        <NavLink to='/profile' className='header__profile' onClick={handleCloseMenu}>
                        <p className='header__profile-text'>Аккаунт</p>
                        </NavLink>
                        <div className='header__close-menu' onClick={handleCloseMenu}>
                            <div className='header__cross'></div>
                        </div>
                    </nav>
                </div>
                <div className={`header__open-menu ${!loggedIn && 'header__open-menu_hidden'}`} onClick={handleOpenMenu}>
                    <div className='header__line'></div>
                </div>
            </div>
        </header>
    )
}

export default Header