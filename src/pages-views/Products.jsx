import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard.jsx';

export default function Products() {
  return (
    <>
      <p>Products page</p>
      <Link to="/product/1">
        <ProductCard ProductName="Product 1" />
      </Link>
      <Link to="/product/2">
        <ProductCard ProductName="Product 2" />
      </Link>
      <Link to="/product/3">
        <ProductCard ProductName="Product 3" />
      </Link>
      <Link to="/product/4">
        <ProductCard ProductName="Product 4" />
      </Link>
    </>
  );
}
