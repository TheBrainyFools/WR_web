var React = require('react');
var ListAvatars = require('./ListAvatars');
var ListItem = require('./ListItem');
var TopViewed = require('./TopViewed');
var TopViewedItem = require('./TopViewedItem');
var axios = require('axios');

var SidebarHomePage = React.createClass({
  getInitialState: function() {
    return {
      persons:[]
    };
  },
  componentWillMount: function() {
  var _this = this;
    this.serverRequest =
    axios.get("https://api.themoviedb.org/3/person/popular?api_key=fe497b618e596d47a41279dafb0d1cbf&language=en-US&page=1")
      .then(function(result) {
        _this.setState({
          persons: result.data.results
        });
      })

  },
   contextTypes: {
     PopularPosts: React.PropTypes.array
   },
   render: function() {

     var SidebarHomePageStyles ={
       padding:"5px"
     }
    return (
      <div className="mdl-cell--3-col mdl-cell--12-col-phone" style={SidebarHomePageStyles}>
        <ListAvatars>
          {this.state.persons.slice(0, 5).map(function(person) {
              return(<ListItem name={person.name} imgSrc={'https://image.tmdb.org/t/p/w300'+person.profile_path}/>)
          })}
        </ListAvatars>
        <TopViewed>
          {this.context.PopularPosts.slice(0, 5).map(function(post) {
              return (
          <TopViewedItem name={post.title} imgSrc={post.poster_path} filmId={post.id}/>
           )
         })}
        </TopViewed>
      </div>

    );
  }
})
module.exports = SidebarHomePage;
