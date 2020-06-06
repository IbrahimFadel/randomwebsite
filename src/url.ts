const randomWords = require('random-words');

const urlEndings = ['.com', '.org', '.net', '.us', '.co'];

const randomNumberBetween = (min: number, max: number): number => {
	const num = Math.floor(Math.random() * max) + min;
	return num;
};

const getUrlEnding = (): string => {
	const index = randomNumberBetween(0, urlEndings.length);
	return urlEndings[index];
};

export const getUrl = (): string => {
	const numberOfWords: number = randomNumberBetween(1, 3);
	const words: any = randomWords(numberOfWords);
	const urlEnding: string = getUrlEnding();
	const url: string = `https://${words.join('')}${urlEnding}`;

	return url;
};
