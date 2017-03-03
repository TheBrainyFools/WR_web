var React = require('react');
var GridItem = require('./GridItem');

const ItemsGrid= (props) => {
  return (
    <div>
       <GridItem/>
       <GridItem />
       <GridItem />
       <GridItem />
       <GridItem />
    </div>
  )
}

module.exports = ItemsGrid;
