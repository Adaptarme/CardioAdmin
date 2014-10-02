/** Copiar archivos y carpetas.
 * @link https://github.com/gruntjs/grunt-contrib-copy
 */
module.exports = {
	html: {
		src: ['./index.html', 'app/**/*.html', 'app/**/*.json'],
		dest: 'dist/'
    }
};