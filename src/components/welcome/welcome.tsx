import * as React from 'react';
import './welcome.css';

export const Welcome: React.FC<{ poweredBy?: string }> = ({ poweredBy = '@Snowpack' }) => (
    <div className='welcome'>
        <p>Welcome to React!</p>
        <p>Powered by <span className='welcome__poweredby'>{poweredBy}</span></p>
    </div>
)