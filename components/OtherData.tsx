interface OtherData {
	airQualityText: string;
	cloud: number;
	sunrise: string;
	sunset: string;
	currentTime: string;
}

export default function OtherData({
	airQualityText,
	cloud,
	sunrise,
	sunset,
	currentTime,
}: OtherData) {
	return (
		<div className='glassmorphism mt-2 text-center sm:text-left w-full md:w-3/4 px-5 py-20'>
			<h1 className='text-white text-2xl font-semibold'>Air Quality Level: {airQualityText}</h1>{' '}
			<div className='w-fit'>
				<div className='text-left'>
					<p className='text-white'>Sunrise: {sunrise}&nbsp;</p>
					<p className='text-white'>Sunset: {sunset}&nbsp;</p>
					<p className='text-white'>Current Time: {currentTime}</p>
					<div className=''>
						<p>{cloud}</p>
						<p>{cloud}</p>
						<p>{cloud}</p>
					</div>
				</div>
			</div>
		</div>
	);
}
