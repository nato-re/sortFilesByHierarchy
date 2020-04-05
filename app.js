const path = require('path')
//const os  = require('os')
const fs = require('fs')
let pathObj = path.parse(__filename)

console.log(pathObj)
const EventEmitter = require('events')


const Logger = require('./logger');
const logger = new Logger()

//Register a listener
logger.on('messageLogged', function (arg) {
  console.log('Listener called', arg)
});

logger.log('message');
//const freeMemory = os.freemem();
//console.log(freeMemory);

const files = fs.readdirSync('./', (err, files) => {
  if (err) console.log('Error', err);
  else console.log('Result', files);
})
console.log(files);