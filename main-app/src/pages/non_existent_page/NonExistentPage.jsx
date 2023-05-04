import React, { useState } from 'react'
import './style.css';
import AnimatedStripe from '../../components/Decorations/AnimatedStripe/AnimatedStripe';
import DesignButton from '../../components/UI/Buttons/Button/DesignButton';
import { useNavigate } from 'react-router-dom';
import generateFunctionTransfer from '../../utils/animatedBacground';

const NonExistentPage = () => {

    const history = useNavigate();
    const [styleObject, setStyleObject] = useState(null);
    const [goMain, goLC] = generateFunctionTransfer(history, ["", "personal_account"])
       
    return (
        <div className='main_background'>
            <img src='/img/girl_404.png' className='girl_image blur_animation' alt="perplexed girl" />
            <div className='left_part'>
                <div className='local_header'>
                    <div className='error_ntf '>Страница<br/>не найдена</div>
                </div>
                <div className='local_midle'>
                    <AnimatedStripe style={styleObject} id='aminated404'/>
                    <div className="error_code">404</div>
                    <div className='button_block'>
                        <DesignButton onClick={goMain} id='button_404_gomain'>Главная страница</DesignButton>
                        <DesignButton onClick={goLC} id='button_404_goLC'>Личный кабинет</DesignButton>
                    </div>
                    <div className='company_title_wrapper' style={{ display: 'flex' }}>
                        <div className='company_title glow_element'>Code Live</div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default NonExistentPage