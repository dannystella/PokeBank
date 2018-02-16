import React from 'react';

const List = ({items, handleRemove}) => {
    return (
        <ul>
        {items.map((item, i) =>
        <li key={i} onClick ={() => {handleRemove(item)}}>{item.name}<img src = {item.sprite}/></li>
        )}
        </ul>
    )
}

export default List;