import React from 'react'
function TemplateWeatherDetail(props) {
    return (
        <div className='flex flex-col items-center space-y-1'>
            <p className='
            text-sm font-extralight
            '>{props.title}</p>
            {props.icon}
            <p className='
            text-md font-medium
            
            '>{props.detail}</p>
        </div>
    );
}

export default TemplateWeatherDetail