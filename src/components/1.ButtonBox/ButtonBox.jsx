import React from 'react';
import ButtonItem from '../2.ButtonItem/ButtonItem'
// import { NavLink } from 'react-router-dom';
// const Category = (NavLink)

export default function ButtonBox({menu ,onMenu}) {
    console.log('menu',menu)
    return (
        <ul className='CategoryTab'>
            {/* <ButtonItem item={'all'}/> */}
            {menu.map((item) => <ButtonItem key={item} item={item} onMenu={onMenu}/>)}
        </ul>
    );
}
