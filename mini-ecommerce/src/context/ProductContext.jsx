// src/context/ProductContext.js
import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [featuredCategories, setFeaturedCategories] = useState([]);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);

  // Orders State
  const [orders, setOrders] = useState(() => {
    const savedOrders = localStorage.getItem("orders");
    return savedOrders ? JSON.parse(savedOrders) : [];
  });

  const addOrder = (order) => {
    const updatedOrders = [...orders, order];
    setOrders(updatedOrders);
    localStorage.setItem("orders", JSON.stringify(updatedOrders));
  };

  const loginUser = () => setIsLoggedIn(true);
  const logoutUser = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    setCart([]);
    setWishlist([]);
  };

  const toggleAdmin = () => setIsAdmin((prev) => !prev);

  // ✅ Fetch products
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => setProducts(res.data.products))
      .catch((err) => console.error("Failed to fetch products", err));
  }, []);

  // ✅ Fetch categories & select featured ones
  useEffect(() => {
    axios
      .get("https://dummyjson.com/products/categories")
      .then((res) => {
        setCategories(res.data);

        // You can customize this list as needed
        const featured = [
          "smartphones",
          "laptops",
          "fragrances",
          "skincare",
          "groceries",
          "home-decoration",
        ];
        const filtered = res.data.filter((cat) => featured.includes(cat));
        setFeaturedCategories(filtered);
      })
      .catch((err) => console.error("Failed to fetch categories", err));
  }, []);

  const addProduct = (newProduct) => {
    setProducts((prev) => [newProduct, ...prev]);
  };

  const toggleWishlist = (productId) => {
    if (!isLoggedIn) {
      alert("🚫 Please login to manage your wishlist.");
      return;
    }

    setWishlist((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  const addToCart = (product) => {
    if (!isLoggedIn) {
      alert("🚫 Please login to add items to cart.");
      return;
    }

    setCart((prev) => {
      const existingItem = prev.find((item) => item.product.id === product.id);
      if (existingItem) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prev, { product, quantity: 1 }];
      }
    });
  };

  const removeFromCart = (productId) => {
    setCart((prev) => prev.filter((item) => item.product.id !== productId));
  };

  const clearCart = () => setCart([]);

  const increaseQty = (productId) => {
    setCart((prev) =>
      prev.map((item) =>
        item.product.id === productId
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (productId) => {
    setCart((prev) =>
      prev
        .map((item) =>
          item.product.id === productId
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  return (
    <ProductContext.Provider
      value={{
        products,
        addProduct,
        isAdmin,
        toggleAdmin,
        isLoggedIn,
        loginUser,
        logoutUser,
        wishlist,
        toggleWishlist,
        cart,
        addToCart,
        removeFromCart,
        clearCart,
        increaseQty,
        decreaseQty,
        orders,
        addOrder,
        categories,
        featuredCategories,
      }}
    >
      {children}
    </ProductContext.Provider>
  );
};
