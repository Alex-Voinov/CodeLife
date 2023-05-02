import React from 'react'
import {useNavigate } from 'react-router-dom';
import generateFunctionTransfer from '../../utils/animatedBacground';

const StartPage = () => {
    const history = useNavigate();
    const [handleAuthClick, go404] = generateFunctionTransfer(history, ['authorization','какая-то дичь'])
    return (
        <div>
            <div>StartPage</div>
            <div onClick={handleAuthClick}>authorization</div>
            <div onClick={go404}>404</div>
        </div>
    )
}

export default StartPage;