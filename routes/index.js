var express = require('express');
var router = express.Router();

module.exports = function(io){
  router.get('/', function(req, res) {
    res.render('index', { title: 'Support Ticketing System' } );
  });

  io.on('connection', function(socket){
    console.log('a user connected');

    socket.on('cardMove', function(msg){
      console.log('cardMove');
      socket.broadcast.emit('cardMove', msg);
    });

    socket.on('cardReorder', function(msg){
      console.log('cardReorder');
      socket.broadcast.emit('cardReorder', msg);
    })

    socket.on('msg', function(msg){
      console.log(msg);
    });
  });


  return router;
};
