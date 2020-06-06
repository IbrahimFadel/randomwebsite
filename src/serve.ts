const shell = require('shelljs');

export const serveHtml = (html: string): void => {
	shell.exec(`HTML="${html}" node ./dist/server.js`);
};
