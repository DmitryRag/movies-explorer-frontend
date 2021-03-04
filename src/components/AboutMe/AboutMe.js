import './AboutMe.css'

function AboutMe() {
    return (
        <section className='aboutme' id='aboutme'>
            <h3 className='aboutme__nav-title'>Студент</h3>
            <div className='aboutme__info'>
                <div className='aboutme__profile'>
                    <h2 className='aboutme__name'>Дмитрий</h2>
                    <h3 className='aboutme__about'>Фронтенд-разработчик, 26 лет</h3>
                    <p className='aboutme__dicription'>Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с постоянной работы.</p>
                    <div className='aboutme__links'>
                        <a className='about__me__link' href='https://www.facebook.com/dmitry.ragoyzha' target='__blank'>Facebook</a>
                        <a className='about__me__link' href='https://github.com/dmitryrag' target='__blank'>Github</a>
                    </div>
                </div>
                <div className='aboutme__avatar'></div>
            </div>
        </section>
    )
}

export default AboutMe