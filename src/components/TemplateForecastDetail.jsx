import React from 'react'
import TempImage from '../assets/sun_30.png'
function TemplateForecastDetail(props) {
    return (
        <div className='flex flex-col items-center p-2 py-3 m-2 space-y-1 rounded-full outline outline-sky-100 outline-1 cursor-pointer transition ease-out hover:scale-x-90 '>
            <p className='text-sm font-extralight'>{props.title}</p>

            <img className='w-12' src={TempImage} alt='temp_img' />
            <p className='text-md font-medium'>{props.detail}</p>
        </div>
    );
}

export default TemplateForecastDetail