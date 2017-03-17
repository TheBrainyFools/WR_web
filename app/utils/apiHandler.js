var axios = require('axios');

var key = "fe497b618e596d47a41279dafb0d1cbf";

function getLastFilms(key){
   axios.get('https://api.themoviedb.org/3/movie/popular?api_key=fe497b618e596d47a41279dafb0d1cbf&language=en-US&page=1');
  .then(response => {
      dispatch({
        payload: response.data
      });
    })
    .catch((error) => {
      console.log(error);
    })
}

function getTopRatedFilms() {
  return $.get('https://api.themoviedb.org/3/movie/top_rated?api_key='+key+'&language=en-US&page=1');

}

var apiHandler = {
  films:function() {
    return getLastFilms();
  }
}

module.exports = apiHandler;
