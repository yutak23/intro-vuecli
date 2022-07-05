const path = require('path');
const webpack = require('webpack');
const { LicenseWebpackPlugin } = require('license-webpack-plugin');
const VersionFile = require('webpack-version-file');
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
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
			}),
			new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /ja/),
			new BundleAnalyzerPlugin({
				analyzerMode: 'static',
				reportFilename: './../report/index.html'
			})
		]
	},
	devServer: {
		host: '0.0.0.0',
		port: 8080,
		proxy: {
			'/api': { target: 'http://localhost:3000' }
		},
		static: {
			directory: path.join(__dirname, 'dist')
		}
	},
	transpileDependencies: ['vuetify']
};
