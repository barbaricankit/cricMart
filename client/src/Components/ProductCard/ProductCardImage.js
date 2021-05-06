import { NavLink } from "react-router-dom";
const ProductCardImage = ({ product }) => {
  return (
    <NavLink
      state={product}
      to={`/products/product/${product.name}/${product._id}`}>
      <img className='card-img' src={product.img} alt={product.name} />
    </NavLink>
  );
};

export default ProductCardImage;
