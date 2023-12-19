interface AirQualityCardProps {
	airQualityText: string;
}

export default function AirQualityCard({ airQualityText }: AirQualityCardProps) {
	return (
		<div className='glassmorphism mt-2 text-center sm:text-left w-full md:w-3/4 flex flex-row px-5 py-20 items-stretch justify-around'>
			<h1 className='text-white text-2xl font-semibold'>Air Quality Level: {airQualityText}</h1>
		</div>
	);
}
