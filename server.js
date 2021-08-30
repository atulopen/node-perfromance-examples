const express = require('express');
const PORT = 8000;
const app = express();
const cluster = require('cluster');

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


if (cluster.isMaster) {
    console.log('Master process started');
    cluster.fork();
    cluster.fork();
} else {

    console.log('Worker process started');
    app.listen(PORT, () => {
        console.log(`Listening at ${PORT}`);
    })
}
