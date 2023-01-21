// Node libs
const { Worker, MessageChannel, isMainThread, parentPort, threadId, workerData } = require("worker_threads")

const DEBUGGING = false 

class MyWorker {
    constructor() {}

    setupWorkerHandlers() {
        console.log(threadId, process.env)
        parentPort.on("message", async (param) => {
            parentPort.postMessage("hi")
        })
    }

    start() {
        this.setupWorkerHandlers()
    }
}

async function main() {
    new MyWorker().start()
}
main()