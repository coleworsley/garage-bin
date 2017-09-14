import React from 'react';
import ListItem from './ListItem';

const List = (props) => {
  const items = props.items.map((item) => {
    return <ListItem {...item}
              key={item.id}
              handleListItemChange={props.handleListItemChange}/>
  })

  return (
    <div className='list'>
      { items }
    </div>
  )
}

export default List;
