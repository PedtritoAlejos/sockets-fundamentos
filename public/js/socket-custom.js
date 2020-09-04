var socket = io();

socket.on('connect', function() {
    console.log("conectado al servidor");
});

// escuchar
socket.on('disconnect', function() {
    console.log('Perdimos conexion con el servidor');
})

// emitir
socket.emit('enviarMensaje', {
    usuario: 'Pedrito',
    mensaje: 'Hola Mundo'
}, function(resp) {
    console.log('respuesta del servidor ', resp);
});

//eschuchar información
socket.on('enviarMensaje', function(mensaje) {
    console.log('info del servidor : ' + JSON.stringify(mensaje))
})