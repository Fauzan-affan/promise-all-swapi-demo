const axios = require("axios");

exports.getDetailFilms = async (data) => {
  let res = await axios.get(data);

  return res.data;
};

exports.getFilms = async () => {
  let url = "https://swapi.dev/api/people/1";

  let getPeople = await axios.get(url);
  let filmLinks1 = getDetailFilms(getPeople.data.films[0]);
  let filmLinks2 = getDetailFilms(getPeople.data.films[1]);
  let filmLinks3 = getDetailFilms(getPeople.data.films[2]);
  let filmLinks4 = getDetailFilms(getPeople.data.films[3]);

  let result = await Promise.all([
    filmLinks1,
    filmLinks2,
    filmLinks3,
    filmLinks4,
  ]);

  return result
};

// getFilms().then(res => console.log(res))
