import React from 'react'
import styles from './CompanyLogo.module.css'
const CompanyLogo = (props) => {
    return (
        <div className={styles.company_logo} {...props}>
            CL
        </div>
    )
}

export default CompanyLogo