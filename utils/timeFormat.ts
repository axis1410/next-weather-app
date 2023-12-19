export function convertTo12HourFormat(time: string): string {
	let hour: number = parseInt(time.split(':')[0]);
	let minutes: string = time.split(':')[1];
	let ampm: string = hour >= 12 ? 'PM' : 'AM';
	hour = hour % 12;
	hour = hour ? hour : 12; // the hour '0' should be '12'
	let newTime: string = hour + ':' + minutes + ' ' + ampm;
	return newTime;
}
