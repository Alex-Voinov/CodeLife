import React from 'react'
import Matrix from '../../components/Decorations/Matrix/Matrix'
import { animatedBacgroundDelete } from '../../utils/animatedBacground';
import './style.css';
import CircularIconPanel from '../../components/Decorations/CircularIconPanel/CircularIconPanel'

const AuthorizationPage = () => {
    animatedBacgroundDelete();
    const dataIcons = [
        'apple',
        'facebook',
        'twitter',
        'vk',
        'google'
    ];
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
                        <CircularIconPanel dataIcons={dataIcons} styleIcons={{width: '3vw', height:' 5vh'}}/>  
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