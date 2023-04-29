import React, {useState, useEffect} from 'react'
import Matrix from '../../components/Matrix'
import styles from './Overlay.module.css';

const AuthorizationPage = () => {
    document.body.classList.remove('blackout');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div>
            {isLoading && <div className={styles.overlay}></div>}
            <Matrix />
        </div>
    )
}

export default AuthorizationPage