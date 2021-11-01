# Exemplo de Sockets

- socket.emit : Enviar uma mensagem apenas entre cliente <=> servidor que dispara um evento.
- io.emit : Enviar uma mensagem para todos os clientes com uma conexão socket aberta. (Só é possível usar do lado do servidor)
- socket.broadcast.emit : Enviar uma mensagem para todos os clientes exceto o cliente que disparou o evento. (Só é possível usar do lado do servidor)
- socket.on('eventoCustomizado') : Escutar um evento qualquer.
- socket.on('disconnect') : Escutar o evento disparado quando um usuário se desconecta.
- socket.disconnect : Força o encerramento de uma conexão socket.
