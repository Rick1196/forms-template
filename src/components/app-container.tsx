import React from 'react';

const AppContainer: React.FC<React.HtmlHTMLAttributes<HTMLDivElement>> = ({ children, ...props }) => {
    return <div className='w-full' {...props}>{children}</div>
}

export default AppContainer;