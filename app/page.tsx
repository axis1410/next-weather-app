'use client';

import ErrorMessage from '@/components/ErrorMessage';
import LocationInput from '@/components/LocationInput';
import { WeatherCard } from '@/components/WeatherCard';
import { calculateAQI } from '@/utils/calculateAirQuality';
import { defaultWeather } from '@/utils/defaultWeather';
import { convertTo12HourFormat } from '@/utils/timeFormat';
import React, { useState } from 'react';

export default function Home() {
	const [weatherData, setWeatherData] = useState<Weather>(defaultWeather);
	const [location, setLocation] = useState('');
	const [error, setError] = useState('Waiting for input');
	const [isError, setIsError] = useState(false);
	const [isCelcius, setIsCelcius] = useState(true);
	const [currentTime, setCurrentTime] = useState('');
	const [airQuality, setAirQuality] = useState(0);

	const key = 'c6820101499c4cc394975207231812';

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		try {
			const res = await fetch(
				`https://api.weatherapi.com/v1/current.json?key=${key}&q=${location.toString()}&aqi=yes`
			);

			if (!res.ok) {
				setError(`Error code: ${res.status} ${res.statusText}`);
				setIsError(true);
				throw new Error('Error occured');
			}

			const data = await res.json();

			const formattedTime = convertTo12HourFormat(data?.location.localtime);
			const airQuality = calculateAQI({
				co: data?.current.air_quality.co,
				no2: data?.current.air_quality.no2,
				ozone: data?.current.air_quality.o3,
				so2: data?.current.air_quality.so2,
				pm25: data?.current.air_quality.pm2_5,
				pm10: data?.current.air_quality.pm10,
			});

			setAirQuality(airQuality);
			setCurrentTime(formattedTime);
			setWeatherData(data);
		} catch (err) {
			console.log(err);
		}
	};

	const handleChangeUnits = () => {
		setIsCelcius(!isCelcius);
	};

	return (
		<div className='bg-gradient-to-r from-lapis_lazuli-700 to-indigo-500 h-screen flex flex-col px-10 py-10'>
			<h1 className='text-5xl text-white font-bold'>Axis Weather</h1>
			<br />
			<LocationInput
				location={location}
				setLocation={setLocation}
				handleSubmit={handleSubmit}
			/>
			<div className='flex justify-center items-center'>
				{weatherData?.location.name !== '' ? (
					<>
						<WeatherCard
							name={weatherData?.location.name}
							country={weatherData?.location.country}
							condition={weatherData?.current.condition.text}
							icon={`http:${weatherData?.current.condition.icon}`}
							feelsLike={weatherData?.current.feelslike_c}
							temp_c={weatherData?.current.temp_c}
							feelslike_c={weatherData?.current.feelslike_c}
							temp_f={weatherData?.current.temp_f}
							feelslike_f={weatherData?.current.feelslike_f}
							currentTime={currentTime}
							isCelcius={isCelcius}
						/>
					</>
				) : (
					<ErrorMessage
						isError={isError}
						error={error}
					/>
				)}
			</div>
			<button
				className='fixed bottom-0 right-0 h-20 w-20 rounded-full m-10 bg-black hover:bg-gray-900 text-white text-3xl'
				onClick={handleChangeUnits}
			>
				{isCelcius ? 'C' : 'F'}
			</button>
		</div>
	);
}
