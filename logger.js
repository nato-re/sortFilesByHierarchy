let url = 'http://mylogger.io/log';
const EventEmitter = require('events')

class Logger extends EventEmitter{
  log = (menssage) => {
    console.log(menssage)
    //Raise an event
    this.emit('messageLogged', { id: 1, url: 'https://' });
  }
}


module.exports = Logger;