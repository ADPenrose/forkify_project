import { TIMEOUT_SECONDS } from './config';

// Function that returns a promise that automatically rejects after a certain amount of time.
const timeout = function (s) {
	return new Promise(function (_, reject) {
		setTimeout(function () {
			reject(new Error(`Request took too long! Timeout after ${s} second`));
		}, s * 1000);
	});
};

// Contains functions that are used all over the project.
export const getJSON = async function (url) {
	try {
		// Fetching the data from the API, considering a timeout.
		const response = await Promise.race([fetch(url), timeout(TIMEOUT_SECONDS)]);
		const data = await response.json();

		// If the response is not ok, we need to throw an error so that the
		// catch statement is activated.
		if (!response.ok) throw new Error(`${data.message} ${response.status}`);

		return data;
	} catch (err) {
		// Re-throwing the error so that we can handle it on the model.
		throw err;
	}
};
