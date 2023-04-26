import React from 'react'
import SocialLogo from './SocialLogo'
import LogoLengSelector from './LogoLengSelector'

const AuthorizationFormFooter = () => {
    return (
        <div id="authorization_form_footer">
            <SocialLogo nameSocialNet='facebook' />
            <SocialLogo nameSocialNet='google' />
            <SocialLogo nameSocialNet='vk' />
            <SocialLogo nameSocialNet='twitter' />
            <SocialLogo nameSocialNet='apple' />
            <LogoLengSelector selectedLeng='ru' />
        </div>
    )
}

export default AuthorizationFormFooter