import React from 'react'
import './style.css';
import DesignButton from '../../components/UI/Buttons/ButtonA/AuthButton';
import LoginInput from '../../components/UI/Inputs/LoginInput';

const AuthorizationForm = ({switchFunc, sAuth}) => {
    return (
        <form>
            <LoginInput inputType={'login'}/>
            <LoginInput inputType={'password'}/>

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