var axios = require('axios');
var react = require('react');

var apiHandler = {
function getPopularMovies() {
  var _this = this;
   this.serverRequest =
    axios.get("https://api.themoviedb.org/3/movie/popular?api_key=fe497b618e596d47a41279dafb0d1cbf&language=en-US&page=1")
}
}

module.exports = apiHandler;
