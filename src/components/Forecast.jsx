import React from "react";
import { UilSun} from '@iconscout/react-unicons'
import TemplateForecastDetail from './TemplateForecastDetail';

function Forecast({title}) {
    return (
        <div>
            <div className='flex flex-col text-white my-4 uppercase'>
                <p className='mb-1'>{title}</p>
                <hr className='mb-3'/>
                <div className='flex flex-row items-start justify-around space-x-6'>
                    <TemplateForecastDetail
                        title="12 am"
                        icon=<UilSun />
                        detail="27°"
                    />
                    <TemplateForecastDetail
                        title="12 am"
                        icon=<UilSun />
                        detail="27°"
                    />
                    <TemplateForecastDetail
                        title="12 am"
                        icon=<UilSun />
                        detail="27°"
                    />
                    <TemplateForecastDetail
                        title="12 am"
                        icon=<UilSun />
                        detail="27°"
                    />
                    <TemplateForecastDetail
                        title="12 am"
                        icon=<UilSun />
                        detail="27°"
                    />
                    <TemplateForecastDetail
                        title="12 am"
                        icon=<UilSun />
                        detail="27°"
                    />

                </div>
            </div>
        </div>
    );
}

export default Forecast