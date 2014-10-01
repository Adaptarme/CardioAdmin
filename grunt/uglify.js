/** Minificar archivos JavasScript.
 * @link https://github.com/gruntjs/grunt-contrib-uglify
 */
module.exports = {
	generated: {
		files: [
			{
				dest: 'dist/js/app.js',
				src: [ '.tmp/concat/js/app.js' ]
			}
		]
	}
};