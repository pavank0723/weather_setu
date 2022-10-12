import React from 'react'

function TemplateForecastDetail(props) {
    return (
        <div className='
        flex flex-col items-center py-3 space-y-1 rounded-full outline outline-sky-100 outline-1 cursor-pointer transition ease-out hover:scale-x-90 
        sm:px-2 sm:py-5 sm:flex sm:flex-col sm:items-center sm:space-y-1 sm:rounded-full sm:outline sm:outline-sky-100 sm:outline-1 sm:cursor-pointer sm:transition sm:ease-out sm:hover:scale-x-90 
        md:px-2 md:py-5 md:flex md:flex-col md:items-center md:space-y-1 md:rounded-full md:outline md:outline-sky-100 md:outline-1 md:cursor-pointer md:transition md:ease-out md:hover:scale-x-90 
        lg:px-2 lg:py-5 lg:flex lg:flex-col lg:items-center lg:space-y-1 lg:rounded-full lg:outline lg:outline-sky-100 lg:outline-1 lg:cursor-pointer lg:transition lg:ease-out lg:hover:scale-x-90 
        xl:px-2 xl:py-5 xl:flex xl:flex-col xl:items-center xl:space-y-1 xl:rounded-full xl:outline xl:outline-sky-100 xl:outline-1 xl:cursor-pointer xl:transition xl:ease-out xl:hover:scale-x-90 
        2xl:px-2 2xl:py-5 2xl:flex 2xl:flex-col 2xl:items-center 2xl:space-y-1 2xl:rounded-full 2xl:outline 2xl:outline-sky-100 2xl:outline-1 2xl:cursor-pointer 2xl:transition 2xl:ease-out 2xl:hover:scale-x-90 
        '>
            <p className='text-sm font-extralight'>{props.title}</p>

            <img className='w-12' src={props.icon} alt='temp_img' />
            <p className='text-md font-medium'>{props.detail}</p>
        </div>
    );
}

export default TemplateForecastDetail