import React from 'react'
import './style.css';
import DesignButton from '../../components/UI/Buttons/ButtonA/AuthButton';
const AuthorizationForm = ({switchFunc, sAuth}) => {
    return (
        <form>
            <div className="input_with_logo">
                <div className="input_logo">
                    <div id="logo_email"></div>
                </div>
                <input type="text" placeholder="Введите E-mail" id="input_email" />
            </div>
            <div className="input_with_logo">
                <div className="input_logo">
                    <div id="logo_pass"></div>
                </div>
                <input type="password" placeholder="Введите пароль" id="input_pass" />
            </div>
            <div id="additional_option">
                <label>
                    <input type="checkbox" id="checkbox" /> Запомнить меня
                </label>
                <a href="#">Забыли пароль?</a>
            </div>
            <div id="buttons_container">
                <DesignButton onClick={sAuth}>
                    Войти
                </DesignButton>
                <DesignButton onClick={switchFunc}>
                    Регистрация
                </DesignButton>
            </div>
        </form>
    )
}

export default AuthorizationForm