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