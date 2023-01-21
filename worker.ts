// Node libs
import { Worker, MessageChannel, isMainThread, parentPort, threadId, workerData } from "worker_threads"
import * as fs from "fs"

const DEBUGGING:boolean = false 

class MyWorker {
    constructor() {}

    setupWorkerHandlers() {
        console.log(threadId)
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