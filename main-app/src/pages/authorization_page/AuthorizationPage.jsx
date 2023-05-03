import React from 'react'
import Matrix from '../../components/Decorations/Matrix/Matrix'
import './style.css';
import CircularIconPanel from '../../components/Decorations/CircularIconPanel/CircularIconPanel'
import CompanyLogo from '../../components/Decorations/CL_logo/CompanyLogo';
import AuthorizationForm from './AuthorizationForm';
const AuthorizationPage = () => {

    

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
                    <div id="Company_title">Code Life World</div>
                    <CompanyLogo style={CL_logo_style}/>
                </div>
                <div id="authorization_form">
                    <div id="authorization_form_title">
                        Авторизация <span className="clickable" id="form_close">&times;</span>{' '}
                    </div>
                    <AuthorizationForm />
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