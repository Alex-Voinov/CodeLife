import React from 'react';

const SocialLogo = ({ nameSocialNet }) => {
    return (
        <div
            style={{
                width: '3vw',
                height: '5vh',
                borderRadius: '50%',
                backgroundColor: '#009AAC',
                marginLeft: '2vw',
                backgroundImage: `url(/static/img/logo_${nameSocialNet}.png)`,
                backgroundSize: 'cover',
            }}
        />
    );
};

export default SocialLogo;