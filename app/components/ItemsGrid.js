var React = require('react');
var GridItem = require('./GridItem');

const ItemsGrid= (props) => {
  return (
    <div>
       <GridItem name="King-Kong"/>
       <GridItem name="Logan"/>
       <GridItem name="Lucy"/>
       <GridItem name="Moonlight"/>
       <GridItem name="Arrow Season 5"/>
    </div>
  )
}

module.exports = ItemsGrid;
