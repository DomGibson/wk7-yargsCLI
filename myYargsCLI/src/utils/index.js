const fs = require("fs");
let movies;

exports.addMovie = (movieObj) => {
  //push this into something then save it to a JSON file
  readFile();
  movies.push(movieObj);
  writeFile();
};
exports.listMovies = () => {
  //return the contents of the JSON file
  readFile();
  return movies;
};

const readFile = () => {
  //take contents of a JSON file and store in "movies"
  try {
    const data = fs.readFileSync("db.json");
    movies = JSON.parse(data);
  } catch (error) {
    movies = [
    ];
  }
};
const writeFile = async () => {
  //take contents of "movies" and store in JSON file
  const data = await JSON.stringify(movies);
  await fs.writeFileSync("db.json", data);
};