import React, {useState} from 'react'
import AuthorizationForm from './AuthorizationForm';
import RegistrationForm from './RegistrationForm';
import FormFooter from './FormFooter';
import FormHeader from './FormHeader';
import {useNavigate } from 'react-router-dom';
import generateFunctionTransfer from '../../utils/animatedBacground';

const RightForm = () => {
    const history = useNavigate();
    const [goMain, goLC] = generateFunctionTransfer(history, ['/', '/personal_account'])
    const [registrationMode, setRegistrationMode] = useState(false);
    const switchMode = (e) => {
        console.log(registrationMode);
        e.preventDefault();
        setRegistrationMode(!registrationMode);
    }
    return (
        <div className="authorization_form">
            <FormHeader Mode={registrationMode} closeLink={goMain} />
            {
                registrationMode
                    ? <RegistrationForm switchFunc={switchMode} sAuth={goLC} />
                    : <AuthorizationForm switchFunc={switchMode} sAuth={goLC} />
            }
            <FormFooter />
        </div>
    )
}

export default RightForm