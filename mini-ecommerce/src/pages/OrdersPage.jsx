import { useContext } from "react";
import { ProductContext } from "../context/ProductContext";

const OrdersPage = () => {
  const { orders } = useContext(ProductContext);

  if (orders.length === 0) {
    return (
      <div className="container py-5 text-center">
        <h4 className="text-warning">No orders placed yet.</h4>
      </div>
    );
  }

  const generateTrackingId = () => {
    return "TRK-" + Math.floor(100000 + Math.random() * 900000);
  };

  return (
    <div className="container py-5">
      <h2 className="mb-4">📦 My Orders</h2>
      {orders.map((order, index) => {
        const orderId = `ORD-${new Date(order.date).getTime()}-${index + 1}`;
        const trackingId = generateTrackingId();

        return (
          <div className="card mb-4 p-3" key={index}>
            <h5 className="text-primary">Order #{index + 1}</h5>
            <p><strong>Order ID:</strong> {orderId}</p>
            <p><strong>Tracking ID:</strong> {trackingId}</p>
            <p><strong>Date:</strong> {order.date}</p>
            <p><strong>Name:</strong> {order.customer.name}</p>
            <p><strong>Phone:</strong> {order.customer.phone}</p>
            <p><strong>Address:</strong> {order.customer.address}, {order.customer.city}, {order.customer.state}, {order.customer.pincode}</p>
            <p><strong>Payment Method:</strong> {order.customer.paymentMethod}</p>

            <ul className="list-group">
              {order.cart.map((item, idx) => (
                <li className="list-group-item d-flex justify-content-between align-items-center" key={idx}>
                  <div className="d-flex align-items-center gap-3">
                    <img
                      src={item.product.thumbnail}
                      alt={item.product.title}
                      width="60"
                      height="60"
                      style={{ objectFit: "cover", borderRadius: "6px" }}
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/placeholder.jpg";
                      }}
                    />
                    <div>
                      <div>{item.product.title} × {item.quantity}</div>
                      <small className="text-muted">{item.product.category}</small>
                    </div>
                  </div>
                  <strong>₹{(item.product.price * item.quantity).toFixed(2)}</strong>
                </li>
              ))}
            </ul>

            <div className="text-end mt-3">
              <strong>Total: ₹{order.cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0).toFixed(2)}</strong>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default OrdersPage;
