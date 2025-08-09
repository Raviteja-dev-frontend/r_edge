import React, { useState, useEffect } from "react";
import axios from "axios";

const ProductForm = ({ onSuccess }) => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    bestseller: false,
    sizes: [],
  });

  const [media, setMedia] = useState([]);
  const [categories, setCategories] = useState([]);
  const [sizeInput, setSizeInput] = useState("");

  useEffect(() => {
    axios.get("/api/categories") // Adjust this endpoint as per your backend
      .then(res => setCategories(res.data))
      .catch(err => console.error("Error fetching categories:", err));
  }, []);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSizeAdd = () => {
    if (sizeInput.trim()) {
      setFormData(prev => ({
        ...prev,
        sizes: [...prev.sizes, sizeInput.trim()],
      }));
      setSizeInput("");
    }
  };

  const handleMediaChange = (e) => {
    setMedia(Array.from(e.target.files));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const form = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (Array.isArray(value)) {
          value.forEach(v => form.append(key, v));
        } else {
          form.append(key, value);
        }
      });
      media.forEach(file => form.append("media", file));

      const res = await axios.post("/api/products", form, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      alert("Product added successfully!");
      onSuccess?.(); // optional callback after success
      setFormData({
        name: "",
        description: "",
        price: "",
        category: "",
        bestseller: false,
        sizes: [],
      });
      setMedia([]);
    } catch (err) {
      console.error("Upload failed:", err);
      alert("Upload failed.");
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add New Product</h2>
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input name="name" className="form-control" value={formData.name} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Description</label>
          <textarea name="description" className="form-control" value={formData.description} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Price</label>
          <input name="price" type="number" className="form-control" value={formData.price} onChange={handleChange} required />
        </div>

        <div className="mb-3">
          <label className="form-label">Category</label>
          <select name="category" className="form-select" value={formData.category} onChange={handleChange} required>
            <option value="">Select Category</option>
            {categories.map(cat => (
              <option key={cat._id || cat.id} value={cat.name}>{cat.name}</option>
            ))}
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Sizes</label>
          <div className="d-flex gap-2 mb-2">
            <input
              type="text"
              className="form-control"
              value={sizeInput}
              onChange={(e) => setSizeInput(e.target.value)}
              placeholder="Add size (e.g., M, L, XL)"
            />
            <button type="button" className="btn btn-secondary" onClick={handleSizeAdd}>Add</button>
          </div>
          <div>
            {formData.sizes.map((s, i) => (
              <span key={i} className="badge bg-primary me-1">{s}</span>
            ))}
          </div>
        </div>

        <div className="mb-3 form-check">
          <input name="bestseller" type="checkbox" className="form-check-input" checked={formData.bestseller} onChange={handleChange} />
          <label className="form-check-label">Bestseller</label>
        </div>

        <div className="mb-3">
          <label className="form-label">Upload Media (images, videos, audio)</label>
          <input type="file" name="media" className="form-control" multiple accept="image/*,video/*,audio/*" onChange={handleMediaChange} />
        </div>

        <button type="submit" className="btn btn-success">Add Product</button>
      </form>
    </div>
  );
};

export default ProductForm;
