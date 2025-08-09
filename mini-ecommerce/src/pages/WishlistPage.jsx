// src/pages/WishlistPage.js
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { Link, useNavigate } from "react-router-dom";

const WishlistPage = () => {
  const {
    wishlist,
    products,
    toggleWishlist,
    addToCart,
    isLoggedIn,
  } = useContext(ProductContext);

  const navigate = useNavigate();

  const wishlistItems = products.filter((product) =>
    wishlist.includes(product.id)
  );

  const handleAddToCart = (product) => {
    if (!isLoggedIn) {
      alert("🚫 Please login to add items to your cart.");
      navigate("/login");
      return;
    }
    addToCart(product);
  };

  const handleToggleWishlist = (productId) => {
    if (!isLoggedIn) {
      alert("🚫 Please login to manage your wishlist.");
      navigate("/login");
      return;
    }
    toggleWishlist(productId);
  };

  return (
    <div className="container py-4">
      <h2 className="mb-4">❤️ My Wishlist</h2>

      {wishlistItems.length === 0 ? (
        <p className="text-muted">Your wishlist is empty.</p>
      ) : (
        <div className="row">
          {wishlistItems.map((product) => (
            <div key={product.id} className="col-sm-6 col-lg-3 mb-4">
              <div className="card h-100 shadow-sm border-0 position-relative">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="card-img-top"
                  style={{ height: "220px", objectFit: "cover" }}
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "/placeholder.jpg";
                  }}
                />
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="card-title fw-bold">{product.title}</h5>
                    <p className="card-text text-primary fw-semibold">${product.price}</p>
                    <p className="text-muted small">{product.category}</p>
                  </div>
                  <div className="d-grid gap-2 mt-3">
                    <Link
                      to={`/product/${product.id}`}
                      className="btn btn-outline-primary btn-sm"
                    >
                      View Product
                    </Link>
                    <button
                      className="btn btn-success btn-sm"
                      onClick={() => handleAddToCart(product)}
                    >
                      🛒 Add to Cart
                    </button>
                    <button
                      className="btn btn-outline-danger btn-sm"
                      onClick={() => handleToggleWishlist(product.id)}
                    >
                      ❌ Remove from Wishlist
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
