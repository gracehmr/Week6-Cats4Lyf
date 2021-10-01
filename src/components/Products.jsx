import Item from "./Item";
// import data from '../data'
import "./Products.css";

const Products = ({ addCart, products }) => {
  return (
    <div className="productBody">
      {products.map((cat, index) => {
        return <Item key={index} {...cat} handleClick={() => addCart(cat)} />;
      })}
    </div>
  );
};

export default Products;

