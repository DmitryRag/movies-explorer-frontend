import './NavTab.css'

function NavTab() {
    return (
        <section className='navtab'>
            <ul className='navtab__links'>
                <li className='navtab__link'>
                    <a className='navtab__link-text' href='#aboutproject'>О проекте</a></li>
                <li className='navtab__link'>
                    <a className='navtab__link-text' href='#techs'>Технологии</a></li>
                <li className='navtab__link'>
                    <a className='navtab__link-text' href='#aboutme'>Студент</a></li>
            </ul>
        </section>
    )
}

export default NavTab