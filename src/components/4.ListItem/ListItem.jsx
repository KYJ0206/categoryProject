import React from "react";
import { useNavigate } from "react-router-dom";

export default function ListItem({item}) {
	const {title,description,image,price,category} = item
	const navigate = useNavigate();
	// console.log(item);
	// console.log('리스트별 카테고리 개수',item.category)
	return (
		<article className="productList" onClick={()=> {navigate(`home/click/${item.id}`,{state: {item}})}}>
	        <div className="topBox">
			    <img src={image} alt={title} />
	            <div className="category">{category}</div>
	        </div>
			<footer>
				<div className="bottomBox">
					<h4>{title}</h4>
					<h4>{description}</h4>
					<h4 className="price">${price}</h4>
					<div>
						<h4 className="price">👀 {item.rating.count}</h4>
						<h4 className="price">❤️ {item.rating.rate}</h4>
					</div>		
				</div>
			</footer>
		</article>
	);
};

