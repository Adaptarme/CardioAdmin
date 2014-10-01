/** Comprimir archivos CSS.
 * @link https://github.com/gruntjs/grunt-contrib-cssmin
 */
module.exports = {
	generated: {
		files: {
			'dist/css/app.css': ['.tmp/concat/css/app.css']
		}
	}
};