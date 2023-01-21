// Node libs
const { Worker } = require("worker_threads")

// new Worker("./worker.js", { env: { foo: "bar" } })
new Worker("./worker.js", { argv: ["foo"] })