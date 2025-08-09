import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import ProductList from "./pages/ProductList";
import ProductDetail from "./pages/ProductDetails";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WishlistPage from "./pages/WishlistPage"; 
import CartPage from "./pages/CartPage";
import PlaceOrderPage from "./pages/PlaceOrderPage";
import LoginPages from "./pages/LoginPages";
import AdminDashboard from './pages/AdminDashboard';
import DashboardHome from './pages/DashboardHome';
import AdminProductList from './pages/AdminProductList';
import OrdersPage from "./pages/OrdersPage";
import SlidingPosts from "./pages/SlidingPosts";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FeaturedCategories from "./components/FeaturedCategories";
import Testing from "./pages/Testing";
import '@fortawesome/fontawesome-free/css/all.min.css';
import Contact from "./pages/Contact";
import Demo from "./components/Demo";

function App() {
  const location = useLocation();

  // Define routes where you want to hide Navbar/Footer
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/place-order" element={<PlaceOrderPage />} />
        <Route path="/login" element={<LoginPages />} />
 <Route path="/orders" element={<OrdersPage />} />

 <Route path="/SlidingPosts" element={<SlidingPosts />} />
<Route path="/FeaturedCategories" element={<FeaturedCategories />}/>
<Route path="/testing" element={<Testing />}/>
<Route path="/contact" element={<Contact />} />
<Route path="/demo" element={<Demo />} />
        {/* Admin layout with nested routes */}
        <Route path="/admin" element={<AdminDashboard />}>
          <Route index element={<DashboardHome />} />
          <Route path="products" element={<AdminProductList />} />
        </Route>
      </Routes>

      {!isAdminRoute && <Footer />}
    </>
  );
}

export default App;
