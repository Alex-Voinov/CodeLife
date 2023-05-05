import React from 'react'
import styles from './CompanyTitle.module.css'
const CompanyTitle = ({wrapperStyle, textStyle}) => {
    return (
        <div className={styles.company_title_wrapper} style={wrapperStyle}>
            <div className={styles.company_title} style={textStyle}>Code Live</div>
        </div>
    )
}

export default CompanyTitle