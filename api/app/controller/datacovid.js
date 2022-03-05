const Datacovid = require('../model/datacovid')
const url = 'https://api-covid19-indonesia-v2-kriw6nnwe-reynadi531.vercel.app/api/indonesia/more'
const axios = require('axios')

const addDataCovid = (req, res) => {
    let {log} = req.body

    axios.get(url)
    .then((response) => {
        let j_positif = response.data.penambahan.positif, 
            j_meninggal = response.data.penambahan.meninggal, 
            j_sembuh = response.data.penambahan.sembuh, 
            j_dirawat = response.data.penambahan.dirawat, 
            tanggal = response.data.penambahan.tanggal, 
            created = response.data.penambahan.created;
        Datacovid.create({j_positif, j_meninggal, j_sembuh, j_dirawat, tanggal, created, log})
            .then(result => res.send({
                status: 'Ok',
                response: result
            }))
            .catch(err => console.log(err))
    })
    .catch((err)=>console.log(err))
}

module.exports = addDataCovid

