const express = require('express')
const route = express.Router()

const controllers = require('../controller/api')

route
    .route('/sendEmbed')
    .post(controllers.sendEmbed)

module.exports = route;