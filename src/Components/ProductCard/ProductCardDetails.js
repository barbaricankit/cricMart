import ShowAddCartButton from "./ShowAddCartButton";

const ProductCardDetails = ({ id, name, category, price, quantity }) => {
  return (
    <>
      <div style={{ flexGrow: "1" }}>
        <h4 className='card-text-title'>{name}</h4>
      </div>
      <div>
        <p className='desc'>{category}</p>
        <p className='desc bold'>Rs. {price}</p>
        <div>
          <button className='btn-secondary btn-color'>See Details</button>
          <ShowAddCartButton product_id={id} quantity={quantity} />
        </div>
      </div>
    </>
  );
};

export default ProductCardDetails;
