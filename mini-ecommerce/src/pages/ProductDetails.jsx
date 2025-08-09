import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import "../styles/ProductDetail.css"; // custom styles

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { products, addToCart } = useContext(ProductContext);

  const product = products.find((p) => p.id === parseInt(id));

  const handleAddToCart = () => {
    addToCart(product);
    navigate("/cart");
  };

  if (!product) {
    return (
      <div className="container text-center my-5">
        <h2>Product not found!</h2>
        <button className="btn btn-secondary mt-3" onClick={() => navigate(-1)}>
          ← Go Back
        </button>
      </div>
    );
  }

  return (
    <div className="container bg-pink my-5">
      <div className="row justify-content-center">
        <div className="col-md-11 col-lg-10">
          <div className="card-1 border-0 shadow-sm overflow-hidden">
            <div className="row g-0">
              <div className="col-md-5">
                <img
                  src={product.thumbnail}
                  alt={product.title}
                  className="img-fluid w-100 h-100 object-fit-cover"
                  style={{ maxHeight: "450px", objectFit: "cover" }}
                  onError={(e) =>
                    (e.target.src =
                      "https://via.placeholder.com/500x450?text=No+Image")
                  }
                />
              </div>

              <div className="col-md-7">
                <div className="card-body p-4">
                  <h2 className="card-title fw-bold">{product.title}</h2>
                  <p className="card-text text-muted">{product.description}</p>

                 <ul className="list-group list-group-flush custom-list-group my-3">
  <li className="list-group-item">
    <strong>Brand:</strong> {product.brand}
  </li>
  <li className="list-group-item">
    <strong>Category:</strong> {product.category}
  </li>
  <li className="list-group-item">
    <strong>Rating:</strong> ⭐ {product.rating}
  </li>
  <li className="list-group-item">
    <strong>Stock:</strong> {product.stock} available
  </li>
  <li className="list-group-item">
    <strong>Price:</strong>{" "}
    <span className="text-success fw-bold">${product.price}</span>
  </li>
</ul>


                  <div className="d-flex flex-column gap-3">
                    <button className="btn btn-primary" onClick={handleAddToCart}>
                      🛒 Add to Cart & Go to Cart
                    </button>
                    <button className="btn btn-outline-secondary" disabled>
                      ❤️ Add to Wishlist (coming soon)
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-4">
            <button
              className="btn btn-link text-decoration-none"
              onClick={() => navigate(-1)}
            >
              ← Back to Product List
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
