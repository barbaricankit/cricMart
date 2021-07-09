import { AddMore } from './AddMore';
import { AddtoCart } from './AddtoCart';

const ShowAddCartButton = ({ product_id, quantity }) => {
	
	return quantity >= 0 ? (
		<AddMore product_id={product_id} quantity={quantity} />
	) : (
		<AddtoCart product_id={product_id} />
	);
};

export default ShowAddCartButton;
