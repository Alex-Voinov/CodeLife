import React from 'react'
import CircularIconPanel from '../../components/Decorations/CircularIconPanel/CircularIconPanel'

const FormFooter = () => {
    const dataIcons = [
        'apple',
        'facebook',
        'twitter',
        'vk',
        'google'
    ];
    return (
        <div className="authorization_form_footer">
            <CircularIconPanel dataIcons={dataIcons} styleIcons={{ width: '3vw', height: ' 5vh' }} />
            <div className="clickable lang_selecter">
                RU
            </div>
        </div>
    )
}

export default FormFooter