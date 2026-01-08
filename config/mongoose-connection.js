const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect(process.env.MONGODB_URI)
.then(() => console.log('connected to mongodb'))


module.exports = mongoose.connection;