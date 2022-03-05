const mongoose = require('mongoose')
const url = 'mongodb://user1:pwduser1@localhost:27017/data-covid?authSource=admin'

mongoose.connect(url)
const db = mongoose.connection

db.on('error', console.error.bind(console, 'Connection Error'));
db.once('open', ()=>console.log('Koneksi ke database berhasil'));
