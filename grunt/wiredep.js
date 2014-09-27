/** Inyectar dependencias de Bower en su código fuente con Grunt.
 * @link https://github.com/stephenplusplus/grunt-wiredep
 */
module.exports = {
  bowerInstall: {
    src: ['index.html'],
    options: {
      dependencies: false,
      devDependencies: true,
    }
  }
};