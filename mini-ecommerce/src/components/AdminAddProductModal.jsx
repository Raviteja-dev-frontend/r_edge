// src/components/AdminAddProductModal.jsx
import React, { useState } from "react";

const AdminAddProductModal = ({ onClose, onAdd }) => {
  const [form, setForm] = useState({
    title: "",
    price: "",
    category: "",
    thumbnail: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newProduct = {
      ...form,
      id: Date.now(), // simulate unique ID
      price: parseFloat(form.price),
    };
    onAdd(newProduct);
  };

  return (
    <div className="modal d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0,0,0,0.5)" }}>
      <div className="modal-dialog">
        <div className="modal-content">
          <form onSubmit={handleSubmit}>
            <div className="modal-header">
              <h5 className="modal-title">Add New Product</h5>
              <button type="button" className="btn-close" onClick={onClose}></button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Product Title"
                name="title"
                value={form.title}
                onChange={handleChange}
                required
              />
              <input
                type="number"
                className="form-control mb-2"
                placeholder="Price"
                name="price"
                value={form.price}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Category"
                name="category"
                value={form.category}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                className="form-control"
                placeholder="Image URL (thumbnail)"
                name="thumbnail"
                value={form.thumbnail}
                onChange={handleChange}
              />
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                Cancel
              </button>
              <button type="submit" className="btn btn-primary">
                Add Product
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminAddProductModal;
