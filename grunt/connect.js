/** Iniciar un servidor web.
 * @link https://github.com/gruntjs/grunt-contrib-connect
 */
module.exports = {
	server: {
		options: {
			port: 8000, // Puerto
			hostname: 'localhost', // Dirección
			keepalive: true,
			open: true // Abrir el navegador al iniciar el servidor
		}
    }
};