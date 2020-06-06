const axios = require('axios');
import { request } from './types';

export const testUrl = async (url: string): Promise<request> => {
	let req: request = {
		url,
		success: false,
	};

	try {
		await axios.get(url, {
			timeout: 2000,
		});
		req.success = true;
	} catch (err) {
		req.success = false;
	}

	return req;
};
