import React from 'react'
import styles from './AnimatedStripe.module.css'

const AnimatedStripe = ({top}) => {
    return (
        <div className={styles.stripe_container} style={{top:`${top}`}}>
            <div className={styles.stripe_animation}>
                <div className={styles.stripe}></div>
                <div className={styles.stripe}></div>
                <div className={styles.stripe}></div>
            </div>
        </div>
    );
};

export default AnimatedStripe;