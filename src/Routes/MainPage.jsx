import React from 'react'
import { Link } from 'react-router-dom';


const MainPage = () => {
    return (
        <div>Основная страница<br />
        <Link to="/personal_account">Личный кабинет</Link><br />
        <Link to="/authorization">Авторизация</Link><br />
        <Link to="/*">Несуществующая страница</Link>
        </div>
    )
}

export default MainPage