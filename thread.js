const {isMainThread, workerData, Worker} = require('worker_threads');

if (isMainThread) {
    console.log(`Main Thread Process Id: ${process.pid}`)

    new Worker(__filename, {
        workerData: [2, 4, 1, 7]
    });
    new Worker(__filename, {
        workerData: [4, 1, 6, 8, 1, 2, 3]
    });
} else {
    console.log('worker')
    console.log(`Worker Process Id: ${process.pid}`)
    console.log(`${workerData} sorted is ${workerData.sort()}`)
}