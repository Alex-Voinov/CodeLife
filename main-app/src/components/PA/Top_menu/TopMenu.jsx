import React from 'react'
import styles from './TopMenu.module.css'
import CompanyLogo from '../../Decorations/CL_logo/CompanyLogo'

const TopMenu = ({outLink}) => {

    const logoStyle = {
        width: 'var(--IC_logo_width)',
        height: 'var(--IC_logo_height)',
        borderRadius: 'var(--IC_logo_border_radius)',
        borderWidth: 'var(--IC_logo_border_width)',
        marginLeft: 'var(--IC_logo_ml)',
        fontSize: 'var(--IC_logo_font_size)',
        lineHeight: '31px',
    }
    return (
        <div className={styles.header_menu}>
            <CompanyLogo 
                style={logoStyle}
            />
            <div className={styles.IC_title}>
                Code Life
            </div>
            <div className={styles.header_avatar}></div>
            <div className={styles.header_right}>
                <img className={styles.notific} src="/static/img/icons/notific_2.png" alt=""/>
                    <div className={styles.header_right_content}>
                        <a className={styles.chenge_lang} href="#">RU</a>
                        <a onClick={outLink} className={styles.exit_link} href="#">Выйти</a>
                    </div>
            </div>
        </div>
    )
}

export default TopMenu