const ProductCardDetails = ({ name, category, price }) => {
  return (
    <div className='card-details'>
      <p>{name}</p>
      <p>{category}</p>
      <p>Rs. {price}</p>
    </div>
  );
};

export default ProductCardDetails;
