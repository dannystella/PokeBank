import React from 'react';

const List = ({items, handleRemove}) => {
    return (
        <div className = "poke-list">   
            <ul className = "pokeball">
            {items.map((item, i) =>
            <li className = "col-xs-9" className = "slideDown" key={i} onClick ={() => {handleRemove(item)}}><img src = "/pics/poke-ball.png" />{item.name}<img src = {item.sprite}/></li>
            )}
            </ul>
        </div>
    )
}

export default List;