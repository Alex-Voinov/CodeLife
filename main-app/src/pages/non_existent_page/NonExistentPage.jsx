import React from 'react'
import './style.css';
import AnimatedStripe from '../../components/AnimatedStripe';
import DesignButton from '../../components/UI/Button/DesignButton';
const NonExistentPage = () => {
    
    

    return (
        <div className='main_background'>
            <div className='local_header'>
                <div className='company_title glow_element'>Code Live <br /> world</div>
                <div className='error_ntf '>Страница не найдена</div>
                <div className='company_logo'>CL</div>
            </div>  
            <div className='local_midle'>
                <AnimatedStripe top={'3.5vh'}/>
                <div className="error_code">404</div>
                <div className='button_block'>
                    <DesignButton>На главную</DesignButton>
                    <DesignButton>В личный кабинет</DesignButton>
                </div>
            </div>
        </div>
    )
}

export default NonExistentPage