/** Validar la sintaxis de los archivos JavaScript.
 * @link https://github.com/gruntjs/grunt-contrib-jshint
 */
module.exports = {
	files: ['app/ui/**/*.js'],
	options: {
		jshintrc: '.jshintrc',
		/** Reportes con estilo para JSHint
		 * @link https://github.com/sindresorhus/jshint-stylish
		 */
		reporter: require('jshint-stylish')
	}
};