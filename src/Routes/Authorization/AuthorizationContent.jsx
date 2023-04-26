import React from 'react'
import styles from './AuthorizationContent.module.css'
import CompanyTitle from './CompanyTitle'
import CompanyLogo from './CompanyLogo'
import AuthorizationForm from './AuthorizationForm'
const AuthorizationContent = () => {
    return (
        <section className={styles.authorization_content}>
            <div className={styles.attributes_container}>
                <CompanyTitle/>
                <CompanyLogo/>
            </div>
            <AuthorizationForm/>
        </section>
    )
}

export default AuthorizationContent