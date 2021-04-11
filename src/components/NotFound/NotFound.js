import './NotFound.css'
import { useHistory } from 'react-router-dom'

function NotFound() {
    const history = useHistory()

    return (
        <div className='not-found'>
            <h3 className='not-found__title'>404</h3>
            <p className='not-found__subtitle'>Страница не найдена</p>
            <button className='not-found__button' onClick={() => history.goBack()}>Назад</button>
        </div>
    )
}

export default NotFound