import * as React from 'react';
import './welcome.css';

export const Welcome: React.FC<{ poweredBy?: string }> = ({ poweredBy = '@Snowpack' }) => (
    <div className='welcome'>
        <p className='welcome__react'>Welcome to React!</p>
        <p className='welcome__poweredBy'>Powered by <span className='welcome__poweredBy__tech'>{poweredBy}</span></p>
    </div>
)