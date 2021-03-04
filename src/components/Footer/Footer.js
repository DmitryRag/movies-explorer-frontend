import React from 'react'
import './Footer.css';

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer__title'>
                <p className='footer__title-text'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
            </div>
            <div className='footer__info'>
                <p className='footer__copyright'>&copy;2021 Dmitry Ragoyzha</p>
                <ul className='footer__social-list'>
                    <li className='footer__social-links'><a className='footer__social-link' href='https://praktikum.yandex.ru/'target='__blank'>Яндекс.Практикум</a></li>
                    <li className='footer__social-links'><a className='footer__social-link' href='https://github.com/dmitryrag' target='__blank'>Github</a></li>
                    <li className='footer__social-links'><a className='footer__social-link' href='https://www.facebook.com/dmitry.ragoyzha' target='__blank'>Facebook</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer