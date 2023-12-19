'use client';

import ErrorMessage from '@/components/ErrorMessage';
import LocationInput from '@/components/LocationInput';
import { WeatherCard } from '@/components/WeatherCard';
import { airQualityLevel } from '@/utils/airQualityLevel';
import { defaultWeather } from '@/utils/defaultWeather';
import { useState } from 'react';
import OtherData from '@/components/OtherData';

export default function Home() {
	const [weatherData, setWeatherData] = useState<Weather>(defaultWeather);
	const [location, setLocation] = useState('');
	const [error, setError] = useState('Waiting for input');
	const [isError, setIsError] = useState(false);
	const [isCelcius, setIsCelcius] = useState(true);
	const [currentTime, setCurrentTime] = useState('');
	const [airQualityText, setAirQualityText] = useState('');

	const key = 'c6820101499c4cc394975207231812';

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		try {
			const res = await fetch(
				`https://api.weatherapi.com/v1/forecast.json?key=${key}&q=${location.toString()}}&days=3&aqi=yes&alerts=yes`
			);

			if (!res.ok) {
				setError(`Error code: ${res.status} ${res.statusText}`);
				setIsError(true);
				throw new Error('Error occured');
			}

			const data = await res.json();
			const airQuality = airQualityLevel(data?.current.air_quality['us-epa-index']);

			// @ts-ignore
			setAirQualityText(airQuality?.toString());
			setCurrentTime(data?.location.localtime.toString().slice(11));
			setWeatherData(data);

			console.log(weatherData?.forecast.forecastday[0]);
		} catch (err) {
			console.log(err);
		}
	};

	const handleChangeUnits = () => {
		setIsCelcius(!isCelcius);
	};

	return (
		<div className=' h-screen flex flex-col px-2 py-10'>
			<LocationInput
				location={location}
				setLocation={setLocation}
				handleSubmit={handleSubmit}
			/>
			{weatherData?.location.name !== '' ? (
				<div className=' flex items-center justify-around flex-col'>
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
						isCelcius={isCelcius}
						currentTime={currentTime}
					/>
					<OtherData airQualityText={airQualityText} />
				</div>
			) : (
				<ErrorMessage
					isError={isError}
					error={error}
				/>
			)}
			<button
				className='fixed bottom-0 right-0 sm:h-20 sm:w-20 h-10 w-10 rounded-full sm:m-10 m-4 bg-black hover:bg-gray-900 text-white text-lg sm:text-3xl'
				onClick={handleChangeUnits}
			>
				{isCelcius ? 'C' : 'F'}
			</button>
		</div>
	);
}
