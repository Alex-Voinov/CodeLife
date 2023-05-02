import React, { useState } from 'react'
import './style.css';
import AnimatedStripe from '../../components/AnimatedStripe';
import DesignButton from '../../components/UI/Button/DesignButton';
import { useNavigate } from 'react-router-dom';
import generateFunctionTransfer from '../../utils/animatedBacground';

const NonExistentPage = () => {

    const history = useNavigate();
    const [styleObject, setStyleObject] = useState(null);
    const [goMain, goLC] = generateFunctionTransfer(history, ["", "personal_account"])
    function setupOptionAnimatedStripe() {
        const error404_parrent = document.getElementsByClassName('local_midle')[0];
        const topValue = parseInt(error404_parrent.offsetTop);
        const error404 = error404_parrent.children[1];
        const error404_styles = window.getComputedStyle(error404);
        const fontSizeValue = parseInt(error404_styles.getPropertyValue('font-size'));
        const styleObject = {
            //top: topValue +'px',
            left: '-62vw',
            height: fontSizeValue + 'px'
        };
        console.log(styleObject);
        setStyleObject(styleObject);
    }
    
    window.onresize = setupOptionAnimatedStripe;
    
    return (
        <div className='main_background'>
            <div className='local_header'>
                <div className='error_ntf '>Страница не найдена</div>
            </div>
            <div className='local_midle'>
                <AnimatedStripe style={styleObject} />
                <div className="error_code">404</div>
                <div className='button_block'>
                    <DesignButton onClick={goMain}>На главную</DesignButton>
                    <DesignButton onClick={goLC}>В личный кабинет</DesignButton>
                </div>
                <div style={{ display: 'flex' }}>
                    <div className='company_title glow_element'>Code Live</div>

                </div>
            </div>
            <img src='/img/girl_404.png' className='girl_image blur_animation' alt="perplexed girl" />
        </div>
    )
}

export default NonExistentPage