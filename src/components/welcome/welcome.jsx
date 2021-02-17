import * as React from 'react';
import './welcome.css';

export const Welcome = () => (
    <div className='welcome'>
        <p>Welcome to React!</p>
        <p>Powered by <span className='welcome__poweredby'>Snowpack</span></p>
    </div>
)