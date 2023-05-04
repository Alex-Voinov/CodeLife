import React from 'react'
import {useNavigate } from 'react-router-dom';
import generateFunctionTransfer from '../../utils/animatedBacground';
import TopMenu from '../../components/PA/Top_menu/TopMenu';

const PersonalPage = () => {
    
    const history = useNavigate();
    const [goMain] = generateFunctionTransfer(history, ['/'])

    return (
        <>
            <TopMenu outLink={goMain}/>
        </>
    )
}

export default PersonalPage