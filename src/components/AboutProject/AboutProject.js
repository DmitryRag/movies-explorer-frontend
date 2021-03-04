import './AboutProject.css'

function AboutProject() {
    return (
        <section className='aboutproject' id='aboutproject'>
            <h3 className='aboutproject__nav-title'>О проекте</h3>
            <div className='aboutproject__info'>
                <div className='aboutproject__info-text'>
                    <h4 className='aboutproject__title'>Дипломный проект включал 5 этапов</h4>
                    <p className='aboutproject__discription'>
                    Составление плана, работу над бэкендом, вёрстку, добавление функциональности и финальные доработки.
                    </p>
                </div>
                <div className='aboutproject__info-text'>
                    <h4 className='aboutproject__title'>На выполнение диплома ушло 5 недель</h4>
                    <p className='aboutproject__discription'>
                    У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.
                    </p>
                </div>
            </div>
            <div className='aboutproject__timeline'>
                    <div className='aboutproject__timeline-backend'>
                        <p className='aboutproject__timeline-bactime'>1 неделя</p>
                        <p className='aboutproject__timeline-discription'>Back-end</p>
                    </div>
                    <div className='aboutproject__timeline-frontend'>
                        <p className='aboutproject__timeline-fronttime'>4 недели</p>
                        <p className='aboutproject__timeline-discription'>Front-end</p>
                    </div>
                </div>
        </section>
    )
}

export default AboutProject