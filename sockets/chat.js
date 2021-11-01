module.exports = (io) => io.on('connection', (socket) => {
  socket.broadcast.emit('serverMessage', `Iiiiiirraaaa! ${socket.id} acabou de se conectar :D`);
  socket.on('clientMessage', (message) => {
    io.emit('serverMessage', message )
  });
  socket.on('disconnect', () => {
    socket.broadcast.emit('serverMessage', `Xiii! ${socket.id} acabou de se desconectar! :(`);
  });
});