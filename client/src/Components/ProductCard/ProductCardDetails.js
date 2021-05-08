import { NavLink } from "react-router-dom";
import ShowAddCartButton from "./ShowAddCartButton";

const ProductCardDetails = ({
  product,
  id,
  name,
  category,
  price,
  quantity,
}) => {
  return (
    <>
      <h4 className='card-text-title'>{name}</h4>

      <div>
        <p className='desc'>{category}</p>
        <p className='desc bold'>Rs. {price}</p>
        <div>
          <NavLink state={product} to={`/product/${id}`}>
            <button className='btn-secondary btn-color'>See Details</button>{" "}
          </NavLink>
          <ShowAddCartButton product_id={id} quantity={quantity} />
        </div>
      </div>
    </>
  );
};

export default ProductCardDetails;
