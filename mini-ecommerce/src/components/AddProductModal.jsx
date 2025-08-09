import { useState, useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const AddProductModal = ({ onClose }) => {
  const { addProduct } = useContext(ProductContext);
  const [form, setForm] = useState({
    title: "",
    price: "",
    category: "",
    imageFile: null,
    previewUrl: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const preview = URL.createObjectURL(file);
      setForm((prev) => ({
        ...prev,
        imageFile: file,
        previewUrl: preview,
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.imageFile) {
      alert("Please select an image");
      return;
    }

    const newProduct = {
      id: Date.now(),
      title: form.title,
      price: parseFloat(form.price),
      category: form.category,
      thumbnail: form.previewUrl, // in real case, you'd upload and store URL
    };

    addProduct(newProduct);
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
        <h2 className="text-lg font-bold mb-4">Add New Product</h2>

        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          className="form-control mb-2"
          required
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={form.price}
          onChange={handleChange}
          className="form-control mb-2"
          required
        />
        <input
          type="text"
          name="category"
          placeholder="Category"
          value={form.category}
          onChange={handleChange}
          className="form-control mb-2"
          required
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="form-control mb-2"
          required
        />

        {form.previewUrl && (
          <img
            src={form.previewUrl}
            alt="Preview"
            className="mb-3 rounded"
            style={{ width: "100%", height: "150px", objectFit: "cover" }}
          />
        )}

        <div className="d-flex justify-content-between">
          <button type="button" className="btn btn-secondary" onClick={onClose}>
            Cancel
          </button>
          <button type="submit" className="btn btn-success">
            Add
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddProductModal;
