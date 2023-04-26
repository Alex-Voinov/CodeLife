import React from 'react'
import styles from './AuthorizationPage.module.css'
import Matrix from '../../Components/Matrix/Matrix'
import AuthorizationContent from './AuthorizationContent'

const AuthorizationPage = () => {
    return (
        <div className={styles.wrapper}>
            <Matrix/>
            <AuthorizationContent/>
        </div>
    )
}

export default AuthorizationPage