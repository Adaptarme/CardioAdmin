/** Minificar HTML.
 * @link https://github.com/gruntjs/grunt-contrib-htmlmin
 */
module.exports = {
	dist: {
		options: {
			removeComments: true,
			collapseWhitespace: true
		},
		files: {
			'dist/index.html': 'dist/index.html'
		}
    }
};