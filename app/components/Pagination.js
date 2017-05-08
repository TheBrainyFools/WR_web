var React = require('react');
var PropTypes = React.PropTypes;

var Pagination = React.createClass({
  componentDidMount: function() {
    var current_page = 1;
var records_per_page = 4;

var objJson = [

]; // Can be obtained from another source, such as your objJson variable

function prevPage()
{
    if (current_page > 1) {
        current_page--;
        changePage(current_page);
    }
}

function nextPage()
{
    if (current_page < numPages()) {
        current_page++;
        changePage(current_page);
    }
}

function changePage(page)
{
    var btn_next = document.getElementById("btn_next");
    var btn_prev = document.getElementById("btn_prev");
    var listing_table = document.getElementById("listingTable");
    var page_span = document.getElementById("page");

    // Validate page
    if (page < 1) page = 1;
    if (page > numPages()) page = numPages();

    listing_table.innerHTML = "";

    for (var i = (page-1) * records_per_page; i < (page * records_per_page); i++) {
        listing_table.innerHTML += objJson[i].adName + "<br>";
    }
    page_span.innerHTML = page;

    if (page == 1) {
        btn_prev.style.visibility = "hidden";
    } else {
        btn_prev.style.visibility = "visible";
    }

    if (page == numPages()) {
        btn_next.style.visibility = "hidden";
    } else {
        btn_next.style.visibility = "visible";
    }
}

function numPages()
{
    return Math.ceil(objJson.length / records_per_page);
}

window.onload = function() {
    changePage(1);
};
  },

  render: function() {
    return (
      <div className='pagination-container' style={{margin:'20px', zIndex:'20',position:'relative'}}>
        <div id="listingTable"></div>
        <a  id="btn_prev">Prev</a>
        <a href="#" onClick={this.context.nextPagePopular} id="btn_next">Next</a>
      </div>
    );
  },

});

module.exports = Pagination;
