import './Profile.css'

function Profile(props) {

    return (
        <section className='profile'>
            <h1 className='profile__title'>Привет, Дима!</h1>
            <form className='profile__form'>
                <label className='profile__label'>Имя
                    <input className='profile__input profile__input_error' type='text' minlength='2' maxlength='30' required />
                </label>
                <div className='profile__line' />
                <label className='profile__label'>Почта
                    <input className='profile__input' type='email' required />
                </label>
                <div className='profile__button-zone'>
                    <button type='submit' className='profile__button'>Редактировать</button>
                    <button className='profile__button profile__button_color'>Выйти из аккаунта</button>
                </div>
            </form>
        </section>
    )
}

export default Profile