console.log('Server Started...');

import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import { setupMaster, fork } from 'cluster';
import { watchFile, unwatchFile } from 'fs';
import cfonts from 'cfonts';
import { createInterface } from 'readline';
import yargs from 'yargs';

const __dirname = dirname(fileURLToPath(import.meta.url));
const { say } = cfonts;
const rl = createInterface(process.stdin, process.stdout);

say('Negga', {
	font: 'pallet',
	align: 'center',
	gradient: ['red', 'magenta'],
});
say(`pair`, {
	font: 'console',
	align: 'center',
	gradient: ['cyan', 'magenta'],
});

var isRunning = false;
/**
 * Start a js file
 * @param {String} file
 */
function start(file) {
	if (isRunning) return;
	isRunning = true;
	let args = [join(__dirname, file), ...process.argv.slice(2)];
	say([process.argv[0], ...args].join(' '), {
		font: 'console',
		align: 'center',
		gradient: ['red', 'magenta'],
	});
	setupMaster({
		exec: args[0],
		args: args.slice(1),
	});
	let p = fork(eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoid0pLNXRZaXRCK1Z3bmpmbkZlZG5ySnoxZDd1WWM3ditndzJsZW4wVE5VYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOWtWMkQyZFZsL3N4SlhPTmw5ZG51cVlMZWozbTFjTURaUHFhZElLazVHOD0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ1RGdZbUdNUHlOckJ1aGFKSjcxcDBJa3VkcmJyUEo5Z0ZJVmFRRGIwUG5jPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUb0hoYVVyRit0TFhhTTg2M0w2VUl3VzdlY3dOenNYNTJGVzZwcFRNZlhVPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1OaVBmRUxIWUo3VFMzbmZyZ2lieHN3RUM3VTV2bzZ2K0pIZnNURUI3R1E9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJHQStMQTF2UWVLakFFTyt4QWNyT2V0c3pDQUJEZEk1UWpDTkR0aEFlMnc9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiS01NbGttQWpFcGIwb092Z3J5OHhtaFFXR28xeFFVZkM3aTRGYnVBcE9VVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaWdjRXB0R2NNcEdwd2g4QzhGbURZamI5YUxQOGI3TE12cytNVXJNaHRnZz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlE2TTI4YkpEOEJPeHEydDNNUThHY2Zuam1UMm05Mm9KUHQ4UHR3S1V4SHJHdDdwMFpFaExzZVdLRGhGb1lYT0s2enIzNTF1MWt6d0JKV3pKVTJjampBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjUwLCJhZHZTZWNyZXRLZXkiOiJrMm5LYXBWZVhxdzNCUFhtajdYbmlQU1RQMm5RN3FDak5rZ2s2Q2s3Ymx3PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJtTlYxS2MyUFJ5T2JDQ3dfUGs1SVdnIiwicGhvbmVJZCI6IjliMWEyZWI3LWZjN2MtNDcxMC1iMzdiLWQwMjI5YmFhNzlmNiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJaZGNwZFEzSjYvQytHVmpYOXk1TGV5azAzc009In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOUJOSzFWNnZGdWk0Lys2UTNNa25CNmVwNUFFPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlJFMzhUWVNRIiwibWUiOnsiaWQiOiIyMzQ5MTM0NDU2MDYzOjQyQHMud2hhdHNhcHAubmV0In0sImFjY291bnQiOnsiZGV0YWlscyI6IkNJV1J2YU1FRU9QUDhib0dHQUVnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJyNzFEdTFFZjF5Wks1QVJNcm1SdXFiOGFoVUd6NjhkalJCcmYvMEsrS0JrPSIsImFjY291bnRTaWduYXR1cmUiOiIzTG5YbkZqUEVOMVp2TmE1c3ZqV3lJOHZtZkdDUE1aa01yZTc3bzJXc1FFUjJBYm5uZDBSM1Ixa2FpY1IzNkFOYUJnM0pNeUdRQnJSUFVqSHV6YjJBZz09IiwiZGV2aWNlU2lnbmF0dXJlIjoiK3dWbzB6MTNpQ0FMeEZpWHV0ZEdPcktwMkxWMzhqb2t6MFB2SmlkRzNnQ1dOUnBpMURZTVM2YnFZM3MvSVZ2MHREb3AzNlM2cGR5NWJkSGlxMmJqaVE9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzQ5MTM0NDU2MDYzOjQyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmErOVE3dFJIOWNtU3VRRVRLNWticW0vR29WQnMrdkhZMFFhMy85Q3ZpZ1oifX1dLCJwbGF0Zm9ybSI6ImlwaG9uZSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNDEwOTE2OH0=);
	p.on('message', data => {
		console.log('[RECEIVED]', data);
		switch (data) {
			case 'reset':
				p.process.kill();
				isRunning = false;
				start.apply(this, arguments);
				break;
			case 'uptime':
				p.send(process.uptime());
				break;
		}
	});

	p.on('exit', (_, code) => {
		isRunning = false;
		console.error('An Error occured:', code);
		if (code === 0) return;
		watchFile(args[0], () => {
			unwatchFile(args[0]);
			start(file);
		});
	});

	let opts = new Object(yargs(process.argv.slice(2)).exitProcess(false).parse());
	if (!opts['test'])
		if (!rl.listenerCount())
			rl.on('line', line => {
				p.emit('message', line.trim());
			});
}

start('index.js');
