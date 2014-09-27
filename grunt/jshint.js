/** Validar la sintaxis de los archivos JavaScript.
 * @link https://github.com/gruntjs/grunt-contrib-jshint
 */
module.exports = {
	files: ['app/ui/**/*.js'],
	options: {
		jshintrc: '.jshintrc',
		reporter: require('jshint-stylish')
	}
};