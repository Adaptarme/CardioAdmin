/** Detectar cuando un archivo ha sido editados.
 * @link https://github.com/gruntjs/grunt-contrib-watch
 */
module.exports = {
	files: ['app/ui/**/*.js'],
	tasks: ['jshint'],
	options: {
		spawn: false
	}
};