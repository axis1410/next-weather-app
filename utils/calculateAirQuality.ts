const aqi = require('aqi-pollutant-calculator');

interface aqiParameters {
	co: number;
	pm25: number;
	ozone: number;
	pm10: number;
	so2: number;
	no2: number;
}

export function calculateAQI({ co, pm25, ozone, pm10, so2, no2 }: aqiParameters): number {
	const gasConcentration = {
		co: co,
		no2: no2,
		o3: ozone,
		so2: so2,
		pm25: pm25,
		pm10: pm10,
	};

	const overallAqi = aqi.calculateAQI(gasConcentration);

	return overallAqi;
}
