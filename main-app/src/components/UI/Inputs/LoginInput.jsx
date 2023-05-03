import React from 'react'
import styles from './LoginInput.module.css'
const LoginInput = ({inputType}) => {
    
    const dataInput = {
        login: {type: 'text', logoSrc: 'user', placeholder: 'Введите E-mail'},
        password: {type: 'password', logoSrc: 'lock', placeholder: 'Введите пароль'}
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.logo}>
                <img 
                    src={`/img/input_logo/${dataInput[inputType].logoSrc}.png`} 
                    alt={`${inputType}_logo`} 
                    className={styles.logo_img}
                />
            </div>
            <input className={styles.content} type={dataInput[inputType].type} placeholder={dataInput[inputType].placeholder} />
        </div>
    )
}

export default LoginInput