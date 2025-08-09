// src/pages/PlaceOrderPage.js
import { useContext, useState } from "react";
import { ProductContext } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";
import "../styles/PlaceOrderPage.css"; // Assuming you have styles for this page
const PlaceOrderPage = () => {
  const { cart, clearCart, addOrder } = useContext(ProductContext);
  const navigate = useNavigate();

  const [customer, setCustomer] = useState({
    name: "",
    email: "",
    phone: "",
    alternatePhone: "",
    address: "",
    landmark: "",
    mandal: "",
    district: "",
    city: "",
    state: "",
    pincode: "",
    paymentMethod: "COD",
    upiId: "",
    cardNumber: "",
    cardExpiry: "",
    cardCVV: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setCustomer({ ...customer, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const newErrors = {};

    if (!customer.name.trim() || /[^a-zA-Z\s]/.test(customer.name)) {
      newErrors.name = "Full name is required and must contain only letters.";
    }

    if (!customer.email.includes("@")) newErrors.email = "Valid email required.";

    if (!/^[6-9]\d{9}$/.test(customer.phone))
      newErrors.phone = "Valid 10-digit mobile number required.";

    if (customer.alternatePhone && !/^[6-9]\d{9}$/.test(customer.alternatePhone))
      newErrors.alternatePhone = "Alternate number must be valid.";

    if (!customer.address.trim()) newErrors.address = "Address required.";

    ["mandal", "district", "city", "state"].forEach((field) => {
      if (!customer[field].trim() || /[^a-zA-Z\s]/.test(customer[field])) {
        newErrors[field] = `${field.charAt(0).toUpperCase() + field.slice(1)} must contain only letters.`;
      }
    });

    if (!/^\d{6}$/.test(customer.pincode)) newErrors.pincode = "Valid 6-digit pincode required.";

    if (customer.paymentMethod === "UPI" && !customer.upiId.trim()) {
      newErrors.upiId = "UPI ID required.";
    }

    if (customer.paymentMethod === "Card") {
      if (!/^\d{16}$/.test(customer.cardNumber))
        newErrors.cardNumber = "16-digit card number required.";
      if (!customer.cardExpiry.trim()) newErrors.cardExpiry = "Expiry date required.";
      if (!/^\d{3}$/.test(customer.cardCVV)) newErrors.cardCVV = "3-digit CVV required.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const restrictToNumbers = (e) => {
    if (!/[0-9]/.test(e.key) && e.key !== "Backspace" && e.key !== "Tab") {
      e.preventDefault();
    }
  };

  const restrictToLetters = (e) => {
    if (!/[a-zA-Z\s]/.test(e.key) && e.key !== "Backspace" && e.key !== "Tab") {
      e.preventDefault();
    }
  };

  const handleConfirmOrder = () => {
    if (!validateForm()) return;

    const total = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);

    const order = {
      customer,
      cart,
      total,
      date: new Date().toLocaleString(),
    };

    addOrder(order);
    alert("🎉 Your order has been placed successfully!");
    clearCart();
    navigate("/orders");
  };

  const total = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  if (cart.length === 0) {
    return (
      <div className="container py-5 text-center">
        <h4 className="text-danger">Your cart is empty.</h4>
        <p>Please add some products to place an order.</p>
      </div>
    );
  }

  const inputFields = [
    { name: "name", label: "Full Name", type: "text", keyFilter: restrictToLetters, max: 50 },
    { name: "email", label: "Email", type: "email" },
    { name: "phone", label: "Phone Number", type: "tel", keyFilter: restrictToNumbers, max: 10 },
    { name: "alternatePhone", label: "Alternate Number", type: "tel", keyFilter: restrictToNumbers, max: 10 },
    { name: "address", label: "Address" },
    { name: "landmark", label: "Landmark" },
    { name: "mandal", label: "Mandal", keyFilter: restrictToLetters },
    { name: "district", label: "District", keyFilter: restrictToLetters },
    { name: "city", label: "City", keyFilter: restrictToLetters },
    { name: "state", label: "State", keyFilter: restrictToLetters },
    { name: "pincode", label: "Pincode", type: "tel", keyFilter: restrictToNumbers, max: 6 },
  ];

  return (
    <div className="container py-5">
      <h2 className="mb-4">🧾 Confirm Your Order</h2>
      <div className="row">
        <div className="col-md-7">
          <div className="card p-4 mb-4">
            <h5 className="mb-3">👤 Customer & Delivery Details</h5>
            <div className="row g-3">
              {inputFields.map(({ name, label, type = "text", keyFilter, max }, idx) => (
                <div className="col-md-6" key={idx}>
                  <input
                    type={type}
                    className={`form-control ${errors[name] ? "is-invalid" : ""}`}
                    name={name}
                    placeholder={label}
                    value={customer[name]}
                    onChange={handleChange}
                    maxLength={max}
                    onKeyDown={keyFilter || null}
                  />
                  {errors[name] && <div className="invalid-feedback">{errors[name]}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="col-md-5">
          <div className="card p-4 mb-4">
            <h5 className="mb-3">💳 Payment Method</h5>
            <select
              className="form-select mb-3"
              name="paymentMethod"
              value={customer.paymentMethod}
              onChange={handleChange}
            >
              <option value="COD">Cash on Delivery</option>
              <option value="UPI">UPI</option>
              <option value="Card">Credit/Debit Card</option>
            </select>

            {customer.paymentMethod === "UPI" && (
              <div className="mb-3">
                <input
                  type="text"
                  className={`form-control ${errors.upiId ? "is-invalid" : ""}`}
                  placeholder="Enter UPI ID"
                  name="upiId"
                  value={customer.upiId}
                  onChange={handleChange}
                />
                {errors.upiId && <div className="invalid-feedback">{errors.upiId}</div>}
              </div>
            )}

            {customer.paymentMethod === "Card" && (
              <>
                <div className="mb-3">
                  <input
                    type="text"
                    className={`form-control ${errors.cardNumber ? "is-invalid" : ""}`}
                    placeholder="Card Number"
                    name="cardNumber"
                    value={customer.cardNumber}
                    onChange={handleChange}
                    maxLength={16}
                    onKeyDown={restrictToNumbers}
                  />
                  {errors.cardNumber && <div className="invalid-feedback">{errors.cardNumber}</div>}
                </div>
                <div className="mb-3">
                  <input
                    type="text"
                    className={`form-control ${errors.cardExpiry ? "is-invalid" : ""}`}
                    placeholder="Expiry (MM/YY)"
                    name="cardExpiry"
                    value={customer.cardExpiry}
                    onChange={handleChange}
                  />
                  {errors.cardExpiry && <div className="invalid-feedback">{errors.cardExpiry}</div>}
                </div>
                <div className="mb-3">
                  <input
                    type="password"
                    className={`form-control ${errors.cardCVV ? "is-invalid" : ""}`}
                    placeholder="CVV"
                    name="cardCVV"
                    value={customer.cardCVV}
                    onChange={handleChange}
                    maxLength={3}
                    onKeyDown={restrictToNumbers}
                  />
                  {errors.cardCVV && <div className="invalid-feedback">{errors.cardCVV}</div>}
                </div>
              </>
            )}
          </div>

          <div className="card p-4">
            <h5 className="mb-3">🛒 Order Summary</h5>
            <ul className="list-group mb-3">
              {cart.map((item, index) => (
                <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                  <div className="d-flex align-items-center gap-2">
                    <img src={item.product.thumbnail} alt={item.product.title} height="40" />
                    <span>{item.product.title} x {item.quantity}</span>
                  </div>
                  <strong>${(item.product.price * item.quantity).toFixed(2)}</strong>
                </li>
              ))}
            </ul>
            <h5 className="text-end">
              Total: <span className="text-success fw-bold">${total.toFixed(2)}</span>
            </h5>

            <div className="text-end mt-3">
              <button className="btn btn-success w-100" onClick={handleConfirmOrder}>
                ✅ Confirm Order
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrderPage;
