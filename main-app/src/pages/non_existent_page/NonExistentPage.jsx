import React from 'react'
import './style.css';
import AnimatedStripe from '../../components/AnimatedStripe';
import DesignButton from '../../components/UI/Button/DesignButton';
import {useNavigate } from 'react-router-dom';

const NonExistentPage = () => {

    const history = useNavigate();
    

    return (
        <div className='main_background'>
            <div className='local_header'>
                <div className='error_ntf '>Страница не найдена</div>
            </div>  
            <div className='local_midle'>
                <AnimatedStripe style={{top:'3.5vh', left: '-62vw'}}/>
                <div className="error_code">404</div>
                <div className='button_block'>
                    <DesignButton onClick={()=>{history('', {replace: true});}}>На главную</DesignButton>
                    <DesignButton>В личный кабинет</DesignButton>
                </div>
                <div style={{display: 'flex'}}>
                <div className='company_title glow_element'>Code Live</div>
                
                </div>
            </div>
            <img src='/img/girl_404.png' className='girl_image blur_animation' alt="perplexed girl"/>
        </div>
    )
}

export default NonExistentPage