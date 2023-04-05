// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import authentication from '@kdpw/msal-b2c-react';
import App from './App';

authentication.initialize({
    instance: 'https://demo0318.b2clogin.com/tfp/', 
    tenant: 'demo0318.onmicrosoft.com',
    signInPolicy: 'B2C_1_signin_signup',
    applicationId: '5a1cc544-3de4-41bf-aba9-ecff9dd0bac6',
    cacheLocation: 'sessionStorage',
    scopes: ['profile', 'openid'],
    redirectUri: 'http://localhost:3000',
    validateAuthority: false
});

authentication.run(() => {
    ReactDOM.render(<App />, document.getElementById('root'));
});