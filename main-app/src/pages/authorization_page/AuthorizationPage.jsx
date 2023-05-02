import React from 'react'
import Matrix from '../../components/Matrix'
import { animatedBacgroundDelete } from '../../utils/animatedBacground';
import './style.css';

const AuthorizationPage = () => {
    animatedBacgroundDelete()

    return (
        <>
            <Matrix />
            <div className="authorization_page_content">
                <div className="attributes_container">
                    <div id="Company_title">Code Life World</div>
                    <div id="Company_logo">CL</div>
                </div>
                <div id="authorization_form">
                    <div id="authorization_form_title">
                        Авторизация <span className="clickable" id="form_close">&times;</span>{' '}
                    </div>
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
                            <button className="clickable" id="button_log_in_enter">
                                Войти
                            </button>
                            <button className="clickable" id="button_sign_up">
                                Регистрация
                            </button>
                        </div>
                    </form>
                    <div id="authorization_form_footer">
                        <div className="social_logo clickable" id="logo_facebook"></div>
                        <div className="social_logo clickable" id="logo_google"></div>
                        <div className="social_logo clickable" id="logo_vk"></div>
                        <div className="social_logo clickable" id="logo_tweter"></div>
                        <div className="social_logo clickable" id="logo_apple"></div>
                        <div className="clickable" id="lang_selecter">
                            RU
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuthorizationPage