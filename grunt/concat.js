/** Concatenar archivos JavasScript.
 * @link https://github.com/gruntjs/grunt-contrib-concat
 */
module.exports = {
	generated: {
		files: [
			{
				dest: '.tmp/concat/js/app.js',
				src: ['app/ui/**/*.js']
			}
		]
	}
};