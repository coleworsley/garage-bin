import React from 'react';
import ListItem from './ListItem';

const List = (props) => {
  const summaryObj = {
    Sparkling: 0,
    Dusty: 0,
    Rancid: 0,
  }
  const items = props.items.map((item) => {
    summaryObj[item.cleanliness]++;
    return <ListItem {...item}
              key={item.id}
              handleListItemChange={props.handleListItemChange}/>
  })

  return (
    <div className='list'>
      <div className='item-summary'>
        <h3>Number of Items: {props.items.length}</h3>
        <h4>Sparkling: {summaryObj.Sparkling}</h4>
        <h4>Dusty: {summaryObj.Dusty}</h4>
        <h4>Rancid: {summaryObj.Rancid}</h4>
      </div>
      <div className="item-container">
        { items }

      </div>
    </div>
  )
}

export default List;
