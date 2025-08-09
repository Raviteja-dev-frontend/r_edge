// src/pages/AdminProductList.jsx
import React, { useEffect, useState } from "react";
import AdminAddProductModal from "../components/AdminAddProductModal";
import "../styles/ProductList.css"; // optional if you're reusing styles

const AdminProductList = () => {
  const [products, setProducts] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data.products);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Failed to fetch products:", err);
        setLoading(false);
      });
  }, []);

  const handleAddProduct = (newProduct) => {
    setProducts((prev) => [newProduct, ...prev]);
    setShowModal(false);
  };

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold">Admin Product List</h2>
        <button className="btn btn-success" onClick={() => setShowModal(true)}>
          ➕ Add Product
        </button>
      </div>

      {loading ? (
        <p>Loading products...</p>
      ) : (
        <div className="row">
          {products.length === 0 ? (
            <p className="text-muted">No products available.</p>
          ) : (
            products.map((product) => (
              <div key={product.id} className="col-sm-6 col-lg-3 mb-4">
                <div className="admin-product-card h-100 shadow-sm border-0">
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    className="card-img-top"
                    style={{ height: "200px", objectFit: "cover" }}
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = "/placeholder.jpg";
                    }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text text-muted">${product.price}</p>
                    <p className="card-text text-muted small">{product.category}</p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      )}

      {showModal && (
        <AdminAddProductModal
          onClose={() => setShowModal(false)}
          onAdd={handleAddProduct}
        />
      )}
    </div>
  );
};

export default AdminProductList;
