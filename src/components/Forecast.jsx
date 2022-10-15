import React from "react";
import TemplateForecastDetail from './TemplateForecastDetail';
import { WeatherIcons } from "../services/Context";

function Forecast({ title, items }) {
    return (
        <div>
            <div className='flex flex-col text-white uppercase'>
                <p className='my-3 text-lg'>{title}</p>
                <hr className='mb-6' />
                <div className='
                flex flex-row items-start justify-between space-x-2
                sm:space-x-6 sm:justify-around sm:flex sm:flex-row
                md:space-x-6 md:justify-around md:flex md:flex-row
                lg:space-x-6 lg:justify-around lg:flex lg:flex-row
                xl:space-x-6 xl:justify-around xl:flex xl:flex-row
                2xl:space-x-6 2xl:justify-around 2xl:flex 2xl:flex-row
                '>
                    {
                        items.map((item, index) => (
                            <React.Fragment key={index}>
                                <TemplateForecastDetail
                                    title={item.title}
                                    icon={WeatherIcons(item.icon)}
                                    detail={`${item.temp.toFixed()}°`}
                                />
                            </React.Fragment>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}

export default Forecast