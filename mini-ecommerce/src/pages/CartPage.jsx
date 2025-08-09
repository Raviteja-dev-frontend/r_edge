// src/pages/CartPage.js
import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";
import { useNavigate } from "react-router-dom";
const CartPage = () => {
  const {
    cart,
    removeFromCart,
    clearCart,
    increaseQty,
    decreaseQty
  } = useContext(ProductContext);

  const total = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const handlePlaceOrder = () => {
    alert("✅ Order placed successfully!");
    clearCart();
  };
const navigate = useNavigate();
  return (
    <div className="container py-4">
      <h2 className="mb-4">🛒 Cart</h2>

      {cart.length === 0 ? (
        <p className="text-muted">Your cart is empty.</p>
      ) : (
        <>
          <div className="table-responsive mb-3">
            <table className="table table-bordered align-middle text-center">
              <thead className="table-light">
                <tr>
                  <th>Image</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Subtotal</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {cart.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <img
                        src={item.product.thumbnail}
                        alt={item.product.title}
                        height="50"
                      />
                    </td>
                    <td>{item.product.title}</td>
                    <td>${item.product.price}</td>
                    <td>
                      <div className="d-flex justify-content-center align-items-center gap-2">
                        <button
                          className="btn btn-sm btn-secondary"
                          onClick={() => decreaseQty(item.product.id)}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          className="btn btn-sm btn-secondary"
                          onClick={() => increaseQty(item.product.id)}
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <td>
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </td>
                    <td>
                      <button
                        className="btn btn-sm btn-danger"
                        onClick={() => removeFromCart(item.product.id)}
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <h5 className="text-end mb-4">
            Total:{" "}
            <span className="text-success fw-bold">
              ${total.toFixed(2)}
            </span>
          </h5>

          <div className="text-end">
           <button className="btn btn-success" onClick={() => navigate("/place-order")}>
  ✅ Place Order
</button>
          </div>
        </>
      )}
    </div>
  );
};

export default CartPage;
