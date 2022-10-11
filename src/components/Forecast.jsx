import React from "react";
import { UilSun } from '@iconscout/react-unicons'
import TemplateForecastDetail from './TemplateForecastDetail';
import { iconUrlFromCode } from "../services/Context";

function Forecast({ title, items }) {
    return (
        <div>
            <div className='flex flex-col text-white my-4 uppercase'>
                <p className='mb-1 text-lg'>{title}</p>
                <hr className='mb-3' />
                <div className='flex flex-row items-start justify-around space-x-6'>
                    {
                        items.map((item) => (
                            <TemplateForecastDetail
                                title={item.title}
                                icon={iconUrlFromCode(item.icon)}
                                detail={`${item.temp.toFixed()}°`}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Forecast