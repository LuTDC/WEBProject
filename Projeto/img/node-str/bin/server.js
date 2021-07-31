'use strict';
//força js a ser mais criterioso com a gente!

const app = require('../src/app');
const debug = require('debug')('balta:server');
const http = require('http');

// porta fixada em 3000 da aplicação, mas não é interessante
// usar ela, porque pode estar em uso. Logo, temos que NORMALIZAR.
const port = normalizePort(process.env.PORT || '3000');
// setamos a porta
app.set('port', port);

// cria o server baseado na variavel app
const server = http.createServer(app);

server.listen(port);
server.on('error', onError);
server.on('listening', onListening);

console.log('API rodando na porta ' + port);

// gerador de codigo do express
function normalizePort(val){
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }

    if (port >= 0) {
        return port;
    }

    return false;
}

function onError(error){
    if(error.syscall !== 'listen'){
        throw error;
    }

    const bind = typeof port === 'string' ?
        'Pipe ' + port :
        'Port ' + port;

    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requisres elevated privileges')
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
    const addr = server.address();
    const bind = typeof addr === 'string'
        ? 'pipe ' + addr
        : 'port ' + addr.port;
    debug('Listening on ' + bind);
}