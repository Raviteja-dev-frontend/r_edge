import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`}>
      <div className="bg-white shadow rounded overflow-hidden hover:shadow-lg transition">
        <img src={product.thumbnail} alt={product.title} className="h-48 w-full object-cover" />
        <div className="p-4">
          <h3 className="text-lg font-semibold">{product.title}</h3>
          <p className="text-sm text-gray-500">{product.category}</p>
          <p className="text-purple-700 font-bold mt-2">${product.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
