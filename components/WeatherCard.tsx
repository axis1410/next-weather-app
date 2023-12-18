import Image from 'next/image';

interface WeatherCardProps {
	name: string;
	country: string;
	condition: string;
	icon: string;
	feelsLike: number;
	temperature: number;
	currentTime: string;
}

export const WeatherCard = ({
	name,
	country,
	condition,
	icon,
	feelsLike,
	temperature,
	currentTime,
}: WeatherCardProps) => {
	return (
		<div className='glassmorphism flex justify-between flex-row px-5 py-5 object-contain'>
			<div>
				<h1 className='text-white font-bold text-4xl'>
					{name}, {country}
				</h1>
				<p className='text-2xl text-white'>Current weather</p>
				<p className='text-lg text-white'>{currentTime}</p>
			</div>
			<div>
				<div className='flex flex-row justify-center items-center'>
					<Image
						src={icon}
						alt={condition}
						height={70}
						width={70}
					/>
					<p className='text-4xl text-white font-semibold'>{temperature} &deg;C</p>
				</div>
				<p className='text-lg text-white'>Feels like {feelsLike} &deg;C</p>
			</div>
		</div>
	);
};
