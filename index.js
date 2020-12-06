const axios = require('axios')

const getDetailFilms = async (data) => (
    await axios.get(data)
        .then(res => res.data)
)

const getFilms = async () => (
    await axios.get('https://swapi.dev/api/people/1')
        .then(res => res.data.films.map(film => getDetailFilms(film)))
        .then(res => Promise.all(res).then(res => console.log(res)))
)

getFilms()
