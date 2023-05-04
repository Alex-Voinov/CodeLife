import React from 'react'
import {useNavigate } from 'react-router-dom';
import generateFunctionTransfer from '../../utils/animatedBacground';
const PersonalPage = () => {
    const history = useNavigate();
    const [goMain] = generateFunctionTransfer(history, ['goMain'])

    return (
        <div>PersonalPage</div>
    )
}

export default PersonalPage