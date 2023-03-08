import React from 'react';

export default function ButtonItem({item, onMenu}) {
    const {category} = item;
    // console.log('리스트 카테고리 분류',item)
    console.log(category, 'asdfasdfa')
    return (
        <li onClick={() => onMenu(item)}>
            {item}
        </li>
    );
}

