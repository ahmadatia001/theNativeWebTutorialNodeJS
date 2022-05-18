'use strict';

const https = require("https")
const { flaschenpost } = require('flaschenpost');
const {processenv} = require("processenv")


const getKeys = require("./keys");
const getApp = require("./lib/getApp")

const app = getApp()
const keys = getKeys()
const logger = flaschenpost.getLogger();

const port = processenv('PORT') || 3000

const server = https.createServer({
    cert: keys.certificate,
    key: keys.privateKey
}, app)

server.listen(port, ()=>{
    logger.info("server strated.", {port})
})