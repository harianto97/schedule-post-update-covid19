const mongoose = require('mongoose')

const datacovidSchema = mongoose.Schema({
    j_positif: {
        type: Number,
        required: true
    },
    j_meninggal:{
        type: Number,
        required: true
    },
    j_sembuh: {
        type: Number,
        required: true
    },
    j_dirawat:{
        type: Number,
        required: true
    },
    tanggal: {
        type: String,
        required: true
    },
    created:{
        type: String,
        required: true
    },
    log: {
        type: String,
        required: true,
        maxlength: 150
    },
})

const Datacovid = mongoose.model('data_covid', datacovidSchema)

module.exports = Datacovid
