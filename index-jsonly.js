// Node libs
const { Worker } = require("worker_threads")

new Worker("./worker-jsonly.js", { env: { foo: "bar" } })