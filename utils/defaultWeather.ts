export const defaultWeather: Weather = {
	location: {
		name: '',
		region: '',
		country: '',
		localtime: '',
	},
	current: {
		last_updated: '',
		temp_c: 0,
		temp_f: 0,
		condition: {
			text: '',
			icon: '',
			code: 0,
		},
		wind_mph: 0,
		wind_kph: 0,
		wind_degree: 0,
		pressure_mb: 0,
		pressure_in: 0,
		precip_mm: 0,
		precip_in: 0,
		humidity: 0,
		cloud: 0,
		feelslike_c: 0,
		feelslike_f: 0,
		windchill_c: 0,
		windchill_f: 0,
		heatindex_c: 0,
		heatindex_f: 0,
		dewpoint_c: 0,
		dewpoint_f: 0,
		will_it_rain: 0,
		chance_of_rain: 0,
		vis_km: 0,
		gust_kph: 0,
		uv: 0,
		air_quality: {
			co: 0,
			no2: 0,
			o3: 0,
			so2: 0,
			pm2_5: 0,
			pm10: 0,
			'us-epa-index': 0,
			'gb-defra-index': 0,
		},
	},
	forecast: {
		forecastday: [
			{
				data: '',
				day: {
					maxtemp_c: 0,
					maxtemp_f: 0,
					mintemp_c: 0,
					mintemp_f: 0,
				},
				astro: {
					sunrise: '',
					sunset: '',
				},
			},
		],
	},
};
