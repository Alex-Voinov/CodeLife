import React from 'react'
import styles from './AuthorizationForm.module.css'
import AuthorizationFormHeader from './AuthorizationFormHeader'
import AuthorizationFormBody from './AuthorizationFormBody'
import AuthorizationFormFooter from './AuthorizationFormFooter'
const AuthorizationForm = () => {
    return (
        <section className={styles.authorization_form}>
            <AuthorizationFormHeader/>
            <AuthorizationFormBody/>
            <AuthorizationFormFooter/>
        </section>
    )
}

export default AuthorizationForm