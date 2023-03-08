// import ListItem from "../4.ListItem/ListItem";
// const MainList = ({ filterCategory , data }) => {


//     // 옵셔널 체이닝
//     const renderData = data?.filter(items => items.category === filterCategory)

// 	return (
// 		<section>
// 			<div className="productListWrap">
// 				{data && renderData?.map((item) => {
//                     return (
//                         <ListItem key={item.id} item={item} />
//                     )
//                 })}

//                 {
//                     data && renderData.length === 0 && data.map((item) => {
//                         return (
//                             <ListItem key={item.id} item={item} />
//                         )
//                     })
//                 }
// 			</div>
// 		</section>
// 	);
// };

// export default MainList;

import ListItem from "../4.ListItem/ListItem";
const MainList = ({ data }) => {
	
	return (
		<section>
			<div className="productListWrap">
				{data && data?.map((item) => {
                    return (
                        <ListItem key={item.id} item={item} />
                    )
                })}
			</div>
		</section>
	);
};

export default MainList;