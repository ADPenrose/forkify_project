import { TIMEOUT_SECONDS } from './config';

// Function that returns a promise that automatically rejects after a certain amount of time.
const timeout = function (s) {
	return new Promise(function (_, reject) {
		setTimeout(function () {
			reject(new Error(`Request took too long! Timeout after ${s} second`));
		}, s * 1000);
	});
};

// Transforms the result of a promise into actual JSON readable data.
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

// Transforms data into JSON objects ready to send to the API.
export const sendJSON = async function (url, uploadData) {
	try {
		// Making a POST request to the API.
		const response = await Promise.race([
			fetch(url, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(uploadData),
			}),
			timeout(TIMEOUT_SECONDS),
		]);
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
