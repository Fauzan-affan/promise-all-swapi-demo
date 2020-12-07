const axios = require("axios");

const getDetailFilms = async (data) => {
  let res = await axios.get(data);

  return res.data;
};

const getFilms = async () => {
  let url = "https://swapi.dev/api/people/1";

  let getPeople = await axios.get(url);
  let filmLinks1 = await getDetailFilms(getPeople.data.films[0]);
  let filmLinks2 = await getDetailFilms(getPeople.data.films[1]);
  let filmLinks3 = await getDetailFilms(getPeople.data.films[2]);
  let filmLinks4 = await getDetailFilms(getPeople.data.films[3]);

  let result = await Promise.all([
    filmLinks1,
    filmLinks2,
    filmLinks3,
    filmLinks4,
  ]);

  return result
};

getFilms().then(res => console.log(res))
