import { getUrl } from './url';
import { testUrl } from './requests';
import { request } from './types';
import { generateHtml } from './html';
import { serveHtml } from './serve';

const run = async (): Promise<void> => {
	let success: boolean = false;
	let successfulRequest: request;
	while (!success) {
		const url: string = getUrl();
		const request: request = await testUrl(url);
		if (request.success) {
			successfulRequest = request;
		}
		success = request.success;
	}

	console.log('Success: ', successfulRequest);

	const html: string = await generateHtml(successfulRequest);

	serveHtml(html);
};

run();
