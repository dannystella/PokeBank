import React from 'react';

const List = ({items, handleRemove}) => {
    return (
        <ul>
        {items.map((item, i) =>
        <li key={i} onClick ={() => {handleRemove(item)}}>{item.description}</li>
        )}
        </ul>
    )
}

export default List;