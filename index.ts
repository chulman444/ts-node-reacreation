// Node libs
import { Worker } from "worker_threads"

new Worker("./worker.js", { env: { foo: "bar" } })