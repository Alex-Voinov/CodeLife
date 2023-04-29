import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import './style.css';
const StartPage = () => {

    const history = useNavigate();

    const handleAuthClick = (e) => {
        e.preventDefault();
        document.body.classList.add('blackout');
        setTimeout(function () {
            history('/authorization', {replace: true});
        }, 1000);
    }

    return (
        <div>
            <div>StartPage</div>
            <Link to="/authorization" onClick={handleAuthClick}>authorization</Link>
        </div>
    )
}

export default StartPage;
