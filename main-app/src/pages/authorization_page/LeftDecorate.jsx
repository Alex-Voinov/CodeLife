import React from 'react'
import CompanyLogo from '../../components/Decorations/CL_logo/CompanyLogo';

const LeftDecorate = () => {

    const CL_logo_style = {
        marginTop: 'var(--attributes_container_gap)',
        width: 'var(--Company_logo_width)',
        height: 'var(--Company_logo_height)'
    }

    return (
        <div className="attributes_container">
            <div className="Company_title">Code Life</div>
            <CompanyLogo style={CL_logo_style}/>
        </div>
    )
}

export default LeftDecorate