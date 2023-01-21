const fs = require('fs')
const path = require('path');
const tsconfigPaths = require("tsconfig-paths")

const tsconfig_path = path.join(process.cwd(), "./tsconfig.json")
const tsConfig = require(tsconfig_path)

const baseUrl = "./";
const cleanup = tsconfigPaths.register({
  baseUrl,
  paths: tsConfig.compilerOptions.paths,
});

require('ts-node').register(tsconfigPaths);
console.log(process.argv.slice(-1)[0])
const worker_fp = "worker_fp" in process.env ? process.env["worker_fp"] : path.resolve(__dirname, './worker.ts')
require(worker_fp);
