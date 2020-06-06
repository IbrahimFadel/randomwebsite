const fs = require('fs').promises;
import { request } from './types';

const loadTemplate = async (): Promise<string> => {
	return await fs.readFile('template.html', 'utf-8');
};

export const generateHtml = async (req: request): Promise<string> => {
	const template: string = await loadTemplate();
	let buffer: string = '';
	for (const char of template) {
		if (char === '{') {
			buffer += req.url;
		} else if (char !== '}') {
			buffer += char;
		}
	}

	return buffer.replace(/  |\r\n|\n|\r/gm, '');
};
