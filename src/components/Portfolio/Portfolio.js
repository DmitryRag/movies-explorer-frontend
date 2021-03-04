import React from 'react'
import './Portfolio.css';
import portfoliolink from '../../images/portfolio-link.svg'

function Portfolio() {
    return (
        <section className='portfolio'>
            <h2 className='portfolio__title'>Портфолио</h2>
            <ul className='portfolio__links'>
                <li className='portfolio__link'>
                    <a className='portfolio__link-title' href='https://dmitryrag.github.io/russian-travel/'>Статичный сайт
                    <img className='portfolio__link-img' src={portfoliolink} alt='иконка для перемещения по ссылке'/>
                    </a>
                </li>
                <li className='portfolio__link'>
                    <a className='portfolio__link-title' href='http://dmitryrag.students.nomoredomains.icu/sign-up'>Адаптивный сайт
                    <img className='portfolio__link-img' src={portfoliolink} alt='иконка для перемещения по ссылке'/>
                    </a>
                </li>
                <li className='portfolio__link'>
                    <a className='portfolio__link-title' href='http://dmitryrag.students.nomoredomains.icu/sign-up'>Одностраничное приложение
                    <img className='portfolio__link-img' src={portfoliolink} alt='иконка для перемещения по ссылке'/>
                    </a> 
                </li>
            </ul>
        </section>
    );
}

export default Portfolio