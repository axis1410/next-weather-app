'use client';

import ErrorMessage from '@/components/ErrorMessage';
import LocationInput from '@/components/LocationInput';
import { WeatherCard } from '@/components/WeatherCard';
import { defaultWeather } from '@/utils/defaultWeather';
import { format } from 'date-fns';
import React, { useState } from 'react';

export default function Home() {
	const [weatherData, setWeatherData] = useState<Weather>(defaultWeather);
	const [location, setLocation] = useState('');
	const [error, setError] = useState('Waiting for input');
	const [isError, setIsError] = useState(false);

	// @ts-ignore
	let currentTime = format(new Date(), 'h:mm aaa');

	const key = 'c6820101499c4cc394975207231812';

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		try {
			const res = await fetch(
				`http://api.weatherapi.com/v1/current.json?key=${key}&q=${location.toString()}&aqi=yes`
			);

			if (!res.ok) {
				setError(`Error code: ${res.status} ${res.statusText}`);
				setIsError(true);
				throw new Error('Error occured');
			}

			const data = await res.json();
			setWeatherData(data);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<div className='bg-gradient-to-r from-lapis_lazuli-700 to-indigo-500  h-screen flex flex-col px-10 py-10'>
			<h1 className='text-5xl text-white font-bold'>Axis Weather</h1>
			<br />
			<LocationInput
				location={location}
				setLocation={setLocation}
				handleSubmit={handleSubmit}
			/>
			{weatherData?.location.name !== '' ? (
				<>
					<WeatherCard
						name={weatherData?.location.name}
						country={weatherData?.location.country}
						condition={weatherData?.current.condition.text}
						icon={`http:${weatherData?.current.condition.icon}`}
						feelsLike={weatherData?.current.feelslike_c}
						temperature={weatherData?.current.temp_c}
						currentTime={currentTime}
					/>
				</>
			) : (
				<ErrorMessage
					isError={isError}
					error={error}
				/>
			)}
		</div>
	);
}

/**
 *
 * Data to be passed:
 *  location:
 *    name, region, country
 *  current
 *    condition[text] condition[icon]
 *    feelslike_c
 *    temp_c
 *
 */
