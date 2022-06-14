const yargs = require("yargs");
const { addMovie, listMovies } = require("./utils");

const app = (yargsObj) => {
  if (yargsObj.add) {
    // take movie from user input, create object, put in JSON file.
    addMovie({ title: yargsObj.title, actor: yargsObj.actor });
    console.log(listMovies());
  } else if (yargsObj.addMulti) {
    // take two movies from user input, create object, put in JSON file.
  } else if (yargsObj.list) {
    console.log(listMovies());
  }
};

app(yargs.argv);