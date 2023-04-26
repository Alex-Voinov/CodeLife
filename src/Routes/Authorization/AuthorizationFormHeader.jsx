import React from 'react'
import styles from './AuthorizationFormHeader.module.css'
const AuthorizationFormHeader = () => {
    return (
        <div className={styles.authorization_form_header_content}>
            Авторизация
            <span>
                &times;
            </span>
        </div>
    )
}

export default AuthorizationFormHeader