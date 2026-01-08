const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://abhishekjain011a_db_user:Abhishek123@cluster0.x0dep5m.mongodb.net/news')
.then(() => console.log('connected to mongodb'))


module.exports = mongoose.connection;