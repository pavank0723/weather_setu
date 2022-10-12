import React from 'react'

function TopButtons({setQuery}) {
    const cities = [
        {
            id: 1,
            title: 'Varanasi'
        },
        {
            id: 2,
            title: 'Ayodhya'
        },
        {
            id: 3,
            title: 'Ujjain'
        },
        {
            id: 4,
            title: 'Delhi'
        },
        {
            id: 5,
            title: 'New York'
        }
    ]
    return (
        <div className='
        flex justify-between
        sm:flex  sm:items-center sm:justify-between sm:my-4
        md:flex md:items-center md:justify-between md:my-4
        lg:flex lg:items-center lg:justify-between lg:my-4
        xl:flex xl:items-center xl:justify-between xl:my-4
        2xl:flex 2xl:items-center 2xl:justify-between 2xl:my-4
        '
        >
            {cities.map((city) => (
                <button key={city.id} className="
                text-white font-medium text-sm
                sm:text-white sm:font-medium sm:text-lg
                md:text-white md:font-medium md:text-lg
                lg:text-white lg:font-medium lg:text-lg
                xl:text-white xl:font-medium xl:text-lg
                2xl:text-white 2xl:font-medium 2xl:text-lg
                " 
                onClick={() => setQuery({q:city.title})}>
                    {city.title}
                </button>
            ))}
        </div>
    );
}

export default TopButtons