import './Item.css'

const Item = ({ catId, name, price, url, handleClick }) => {
  return (
    <div className="itemDiv">
      <img src={url} alt="" />
      <p>{name}</p>
      <p>£{price}</p>
      <button onClick={handleClick}>Add to cart</button>
    </div>
  );
};

export default Item;

