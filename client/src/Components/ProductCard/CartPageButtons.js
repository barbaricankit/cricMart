import { faRupeeSign } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const CartPageButtons = ({ product, quantity }) => {
  return (
    <>
      <p className='total-value'>
        <span>
          <FontAwesomeIcon icon={faRupeeSign} className='text-sm' />
          <span className='desc h4'>{quantity * product.price}</span>
        </span>
      </p>
    </>
  );
};

export default CartPageButtons;
