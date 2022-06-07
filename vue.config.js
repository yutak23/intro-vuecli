const path = require('path');
const { LicenseWebpackPlugin } = require('license-webpack-plugin');
const VersionFile = require('webpack-version-file');
const { DateTime } = require('luxon');

const dt = DateTime.now();

module.exports = {
	configureWebpack: {
		plugins: [
			new LicenseWebpackPlugin({
				unacceptableLicenseTest: (licenseType) =>
					['GPL', 'AGPL', 'LGPL', 'NGPL'].includes(licenseType),
				outputFilename: 'meta/license.txt'
			}),
			new VersionFile({
				output: './dist/version.json',
				templateString: `{${['version', 'buildDate', 'timestamp', 'environment']
					.map((key) => `"${key}": "<%= ${key} %>"`)
					.join(',')}}`,
				data: {
					buildDate: dt.toISO(),
					timestamp: dt.toSeconds(),
					environment: process.env.NODE_ENV || 'development'
				}
			})
		]
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'dist')
		}
	}
};