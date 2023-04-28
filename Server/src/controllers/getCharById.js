const URL ='https://rickandmortyapi.com/api/character';
const axios = require('axios')

const getCharById = (req, res) => {

    const {id} = req.params;

    axios(`${URL}/${id}`)
    .then(response => response.data)
    .then(({status, name, species, origin, image, gender}) => {
            if(id && name)
    })

}



module.exports = {
    getCharById
}