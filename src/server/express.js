import express from "express"
import path from "path"

const server = express()

const webpack = require("webpack")
const config = require("../../config/webpack.dev.js")
const compiler = webpack(config)

const webpackDevMiddleware = require("webpack-dev-middleware")(
    compiler,
    config.devServer
)

const webpackHotMiddleware = require("webpack-hot-middleware")(
    compiler
)

server.use(webpackDevMiddleware)    //1
server.use(webpackHotMiddleware)    //2

const staticMiddleware = express.static("dist")

server.use(staticMiddleware)    //3

server.listen(8080, () => {
    console.log("Server is running")
})