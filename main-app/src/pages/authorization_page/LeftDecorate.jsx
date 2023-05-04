import React from 'react'
import CompanyLogo from '../../components/Decorations/CL_logo/CompanyLogo';
import { motion } from "framer-motion";
const LeftDecorate = () => {

    const CL_logo_style = {
        marginTop: 'var(--attributes_container_gap)',
        width: 'var(--Company_logo_width)',
        height: 'var(--Company_logo_height)'
    }

    return (
        
        <motion.div
            animate={{ opacity: [0, 0.1, 1, 0.1, 1, 0.1, 1, 0.1, 1, 1] }}
            initial={{ opacity: 0 }}
            transition={{
                delay: 1,
                duration: 1,
                repeat: 0,
            }}
            className="attributes_container"
        >
            <div className="Company_title">Code Life</div>
            <CompanyLogo style={CL_logo_style}/>
        </motion.div>
    )
}

export default LeftDecorate