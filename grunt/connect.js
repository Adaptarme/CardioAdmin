/** Iniciar un servidor web.
 * @link https://github.com/gruntjs/grunt-contrib-connect
 */
module.exports = {
	server: {
		options: {
			port: 8000,
			hostname: 'localhost',
			keepalive: true
		}
    }
};