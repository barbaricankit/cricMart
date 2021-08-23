import { AddMore } from './AddMore';
import { AddtoCart } from './AddtoCart';

const ShowAddCartButton = ({ product_id, quantity,product }) => {
	
	return quantity >= 0 ? (
		<AddMore product_id={product_id} quantity={quantity} product={product}/>
	) : (
		<AddtoCart product_id={product_id} product={product} />
	);
};

export default ShowAddCartButton;
