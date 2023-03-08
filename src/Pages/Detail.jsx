import React from 'react';
import { useLocation } from 'react-router-dom';
import '../Pages/Detail.scss'
import Back from '../components/Back/Back';

export default function Detail() {
    const{
        state: {item},
    } = useLocation();

    console.log(item)

    return (
        <div className='detailBox'>
            <Back/>
            <div className="topBox">
			    <img src={item.image} alt={item.title} />
                <h4>{item.title}</h4>
                <div className='price'>
					<h5>👀 {item.rating.count}</h5>
					<h5>❤️ {item.rating.rate}</h5>
				</div>		
	            <div className="category">{item.category}</div>
	        </div>
			<footer>
				<div className="bottomBox">
					<h5>{item.description}</h5>
					<h5 className="price">${item.price}</h5>
				</div>
			</footer>
        </div>
    );
}

