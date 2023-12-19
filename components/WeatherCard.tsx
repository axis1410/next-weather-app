import Image from 'next/image';

interface WeatherCardProps {
	name: string;
	country: string;
	condition: string;
	icon: string;
	feelsLike: number;
	temp_c: number;
	feelslike_c: number;
	temp_f: number;
	feelslike_f: number;
	currentTime: string;
	isCelcius: boolean;
}

export const WeatherCard = ({
	name,
	country,
	condition,
	icon,
	temp_c,
	temp_f,
	feelslike_c,
	feelslike_f,
	currentTime,
	isCelcius,
}: WeatherCardProps) => {
	return (
		<div className='glassmorphism text-center sm:text-left w-full md:w-3/4 flex flex-row px-5 py-20 items-stretch justify-around'>
			<div className=''>
				<h1 className='text-white font-bold text-4xl'>
					{name}, {country}
				</h1>
				<p className='text-2xl text-white'>Current weather</p>
				<p className='text-lg text-white'>{currentTime}</p>
			</div>
			<div className=''>
				<Image
					src={icon}
					alt={condition}
					height={100}
					width={100}
				/>
			</div>
			<div className=''>
				<p className='text-5xl text-white font-semibold'>
					{isCelcius ? <span>{temp_c} &deg;C</span> : <span>{temp_f} &deg;F</span>}
				</p>

				<p className='text-lg text-white'>
					Feels like{' '}
					{isCelcius ? <span>{feelslike_c} &deg;C</span> : <span>{feelslike_f} &deg;F</span>}
				</p>
			</div>
		</div>
	);
};
