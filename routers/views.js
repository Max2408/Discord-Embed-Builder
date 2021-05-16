const express = require('express')
const route = express.Router()

const controllers = require('../controller/views')

route
    .route('/')
    .get(controllers.home)

module.exports = route;