const express = require('express');
const PORT = 8000;
const app = express();
const cluster = require('cluster');
const os = require('os');

const delay = (duration) => {
    const startTime = Date.now();
    while (Date.now() - startTime < duration) {

    }
}

app.get('/', (req, res) => {
    res.send('Node Performance Examples')
});

app.get('/delay', (req, res) => {
    delay(9000);
    res.send('Message after Delay')
});

console.log('server running');

if (cluster.isMaster) {
    console.log('Master process started');
    const totalCpus = os.cpus().length;
    for (let i = 0; i < totalCpus; i++) {
        cluster.fork();
    }
} else {

    console.log('Worker process started');
    app.listen(PORT, () => {
        console.log(`Listening at ${PORT}`);
    })
}
