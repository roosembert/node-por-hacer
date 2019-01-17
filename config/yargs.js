const descripcion = {
   demand: true,
   alias: 'd',
};
const completado = {
   default: true,
   alias: 'c'
}
const argv = require('yargs')
.command('crear', 'crear un elemento por hacer', {descripcion})
.command('actualizar', 'actualiza el estado completado de una tarea', {descripcion, completado})
.command('borrar', 'borra una tarea', {descripcion})
.help()
.argv;

module.exports = { argv }
