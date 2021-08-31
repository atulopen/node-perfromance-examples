const express = require('express');
const PORT = 8000;
const app = express();

const delay = (duration) => {
    const startTime = Date.now();
    while (Date.now() - startTime < duration) {

    }
}

app.get('/', (req, res) => {
    res.send('Node Performance Examples')
});

app.get('/delay', (req, res) => {
    delay(1000);
    res.send('Message after Delay')
});

console.log('server running');
console.log('Worker process started');
app.listen(PORT, () => {
    console.log(`Listening at ${PORT}`);
});
