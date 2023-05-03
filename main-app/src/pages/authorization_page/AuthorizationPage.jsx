import React, {useState} from 'react'
import Matrix from '../../components/Decorations/Matrix/Matrix'
import './style.css';
import CircularIconPanel from '../../components/Decorations/CircularIconPanel/CircularIconPanel'
import CompanyLogo from '../../components/Decorations/CL_logo/CompanyLogo';
import AuthorizationForm from './AuthorizationForm';
import RegistrationForm from './RegistrationForm';
import {useNavigate } from 'react-router-dom';
import generateFunctionTransfer from '../../utils/animatedBacground';

const AuthorizationPage = () => {

    const [registrationMode, setRegistrationMode] = useState(false);

    const history = useNavigate();
    const [goMain, goLC] = generateFunctionTransfer(history, ['/','/personal_account'])

    const switchMode = (e) => {
        console.log(registrationMode);
        e.preventDefault();
        setRegistrationMode(!registrationMode);
    }

    const dataIcons = [
        'apple',
        'facebook',
        'twitter',
        'vk',
        'google'
    ];

    const CL_logo_style = {
        marginTop: 'var(--attributes_container_gap)',
        width: 'var(--Company_logo_width)',
        height: 'var(--Company_logo_height)'
    }


    return (
        <>
            <Matrix />
            <div className="authorization_page_content">
                <div className="attributes_container">
                    <div className="Company_title">Code Life</div>
                    <CompanyLogo style={CL_logo_style}/>
                </div>
                <div id="authorization_form">
                    <div id="authorization_form_title">
                        {registrationMode? 'Регистарция': 'Авторизация'} <span className="clickable" onClick={goMain} id="form_close">&times;</span>
                    </div>
                    {
                        registrationMode 
                        ? <RegistrationForm switchFunc={switchMode} sAuth={goLC}/> 
                        : <AuthorizationForm switchFunc={switchMode} sAuth={goLC}/>
                    }
                    <div className="authorization_form_footer">
                        <CircularIconPanel dataIcons={dataIcons} styleIcons={{width: '3vw', height:' 5vh'}}/>  
                        <div className="clickable lang_selecter">
                            RU
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AuthorizationPage