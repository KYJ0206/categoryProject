import React from 'react';

export default function ButtonItem({item, onMenu}) {
    return (
        <li onClick={() => onMenu(item)}>
            {item}
        </li>
    );
}

