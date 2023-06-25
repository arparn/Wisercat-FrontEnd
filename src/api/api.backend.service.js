import app from "../main";
import axios from "axios";
import querystring from 'querystring'

const CONTENT_TYPE = 'Content-Type'

function applyQueryParameters(url, parameters) {
	const parametersCopy = { ...parameters }

	Object.keys(parametersCopy).forEach((key) => parametersCopy[key] == null && delete parametersCopy[key])
	if (Object.keys(parametersCopy).length > 0) {
		url += `?${querystring.stringify(parametersCopy)}`
	}

	return url
}

export const ApiBackendService = {
	init({ serverUri, options = { headers: {} } }) {
		let defaultOptions = this.options(options)

		app.axios.defaults[defaultOptions.serviceName] = serverUri
		app.axios.defaults.options = defaultOptions
	},

	getFullOptions(method, url, options = {}) {
		const fullOptions = {
			method,
			withCredentials: true,
			headers: {
				...app.axios.defaults.options,
				...options.headers,
				[CONTENT_TYPE]:
						options.headers && options.headers[CONTENT_TYPE]
								? options.headers[CONTENT_TYPE]
								: 'application/json;charset=UTF-8',
			},
			params: options.params,
			data: options.body,
			url: app.axios.defaults[options.serviceName] + url,
		}

		if (options && options.responseType) {
			fullOptions.responseType = options.responseType
		}

		return fullOptions
	},

	request(method, url, options = {}) {
		const fullOptions = this.getFullOptions(method, url, options)

		return axios(fullOptions).then((response) => response.data)
	},

	get(url, options) {
		let reqOptions = this.options(options)

		if (reqOptions && reqOptions.params) {
			url = applyQueryParameters(url, reqOptions.params)
			reqOptions.params = null
		}

		return this.request('GET', url, reqOptions)
	},

	post(url, body, options) {
		let reqOptions = this.options(options)

		if (reqOptions && reqOptions.params) {
			url = applyQueryParameters(url, reqOptions.params)
			reqOptions.params = null
		}

		return this.request('POST', url, { body, ...reqOptions })
	},

	delete(url, body, options) {
		let reqOptions = this.options(options)

		return this.request('DELETE', url, { body, ...reqOptions })
	},

	options(options) {
		return { ...options, serviceName: 'backend' }
	},
}