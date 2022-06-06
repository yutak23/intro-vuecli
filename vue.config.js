const { LicenseWebpackPlugin } = require('license-webpack-plugin');

module.exports = {
	configureWebpack: {
		plugins: [
			new LicenseWebpackPlugin({
				unacceptableLicenseTest: (licenseType) =>
					['GPL', 'AGPL', 'LGPL', 'NGPL'].includes(licenseType),
				outputFilename: 'meta/license.txt'
			})
		]
	}
};
