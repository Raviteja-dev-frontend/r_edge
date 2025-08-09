import { useContext, useState, useEffect, useMemo } from "react";
import { ProductContext } from "../context/ProductContext";
import { Link } from "react-router-dom";
import AddProductModal from "../components/AddProductModal";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import "../styles/ProductList.css";

const ProductList = () => {
  const {
    products,
    isAdmin,
    toggleWishlist,
    wishlist = [],
  } = useContext(ProductContext);

  const [categoryFilter, setCategoryFilter] = useState("All");
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeout);
  }, []);

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesCategory =
        categoryFilter === "All" || p.category.toLowerCase() === categoryFilter.toLowerCase();
      const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [products, categoryFilter, search]);

  const sorted = useMemo(() => {
    return [...filtered].sort((a, b) => {
      if (sort === "price") return a.price - b.price;
      if (sort === "name") return a.title.localeCompare(b.title);
      return 0;
    });
  }, [filtered, sort]);

  const badges = ["🔥 Trending", "🆕 New", "🎉 Best Seller", "⚡ Limited Time"];

  return (
    <div className="container py-5">
      {/* Filters */}
      <div className="row align-items-center mb-4 g-1">
        <div className="col-md-3">
          <input
            type="text"
            className="form-control shadow-sm"
            placeholder="Search products..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
        <div className="col-md-3">
          <select
            className="form-select shadow-sm"
            value={categoryFilter}
            onChange={(e) => setCategoryFilter(e.target.value)}
          >
            {categories.map((cat) => (
              <option key={`cat-${cat}`} value={cat}>
                {cat}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-3">
          <select
            className="form-select shadow-sm"
            value={sort}
            onChange={(e) => setSort(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="price">Price</option>
            <option value="name">Name</option>
          </select>
        </div>
        {isAdmin && (
          <div className="col-md-3 text-md-end">
            <button className="btn btn-success shadow-sm" onClick={() => setShowModal(true)}>
              ➕ Add Product
            </button>
          </div>
        )}
      </div>

      {/* Product List */}
      <div className="row">
        {loading ? (
          Array.from({ length: 8 }).map((_, i) => (
            <div className="col-sm-6 col-lg-3 mb-4" key={i}>
              <Skeleton height={300} />
            </div>
          ))
        ) : sorted.length === 0 ? (
          <p className="text-center text-muted">No products match your filters.</p>
        ) : (
          sorted.map((product, index) => (
            <div key={product.id} className="col-sm-6 col-lg-3 mb-4">
              <Link to={`/product/${product.id}`} className="text-decoration-none">
                <div className="card product-card h-100 shadow-sm border-0 position-relative">
                  {/* Badge for top 10 */}
                  {index < 10 && (
                    <span className="badge position-absolute top-0 start-0 m-1">
                      {badges[index % badges.length]}
                    </span>
                  )}

                  {/* Image and Wishlist */}
                  <div className="position-relative products-img-container">
                    <img
                      src={product.thumbnail}
                      alt={product.title}
                      className="card-img-top"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/placeholder.jpg";
                      }}
                      style={{ height: "220px", objectFit: "cover" }}
                    />
                    <button
                      className="wishlist-btn"
                      aria-label="Add to wishlist"
                      onClick={(e) => {
                        e.stopPropagation();
                        e.preventDefault();
                        toggleWishlist(product.id);
                      }}
                    >
                      {wishlist.includes(product.id) ? "❤" : "♡"}
                    </button>
                  </div>

                  {/* Info */}
                  <div className="card-body d-flex flex-column justify-content-between">
                    <div>
                      <h5 className="card-title-1 fw-bold">{product.title}</h5>
                      <div className="d-flex justify-content-between align-items-center">
                      <p className="text-muted-1 small mb-2">{product.category}</p>
                       <p className="card-text text-primary fw-semibold">${product.price}</p>

                      </div>
                      
                    </div>
                    
                    <div className="card-cart-buttion">
                      <button
                    className="add-to-cart-btn"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))
        )}
      </div>

      {/* Add Product Modal */}
      {showModal && <AddProductModal onClose={() => setShowModal(false)} />}
    </div>
  );
};

export default ProductList;


// import { useContext, useState, useEffect, useMemo } from "react";
// import { ProductContext } from "../context/ProductContext";
// import { Link } from "react-router-dom";
// import AddProductModal from "../components/AddProductModal";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";
// import "../styles/ProductList.css";

// const ProductList = ({ onView, onAddToCart }) => {
//   const {
//     products,
//     isAdmin,
//     toggleWishlist,
//     wishlist = [],
//   } = useContext(ProductContext);

//   const [categoryFilter, setCategoryFilter] = useState("All");
//   const [sort, setSort] = useState("");
//   const [search, setSearch] = useState("");
//   const [showModal, setShowModal] = useState(false);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     const timeout = setTimeout(() => setLoading(false), 1000);
//     return () => clearTimeout(timeout);
//   }, []);

//   const categories = ["All", ...new Set(products.map((p) => p.category))];

//   const filtered = useMemo(() => {
//     return products.filter((p) => {
//       const matchesCategory =
//         categoryFilter === "All" || p.category.toLowerCase() === categoryFilter.toLowerCase();
//       const matchesSearch = p.title.toLowerCase().includes(search.toLowerCase());
//       return matchesCategory && matchesSearch;
//     });
//   }, [products, categoryFilter, search]);

//   const sorted = useMemo(() => {
//     return [...filtered].sort((a, b) => {
//       if (sort === "price") return a.price - b.price;
//       if (sort === "name") return a.title.localeCompare(b.title);
//       return 0;
//     });
//   }, [filtered, sort]);

//   const badges = ["🔥 Trending", "🆕 New", "🎉 Best Seller", "⚡ Limited Time"];

//   return (
//     <div className="container py-5">
//       {/* Filters */}
//       <div className="row align-items-center mb-4 g-1">
//         <div className="col-md-3">
//           <input
//             type="text"
//             className="form-control shadow-sm"
//             placeholder="Search products..."
//             value={search}
//             onChange={(e) => setSearch(e.target.value)}
//           />
//         </div>
//         <div className="col-md-3">
//           <select
//             className="form-select shadow-sm"
//             value={categoryFilter}
//             onChange={(e) => setCategoryFilter(e.target.value)}
//           >
//             {categories.map((cat) => (
//               <option key={`cat-${cat}`} value={cat}>
//                 {cat}
//               </option>
//             ))}
//           </select>
//         </div>
//         <div className="col-md-3">
//           <select
//             className="form-select shadow-sm"
//             value={sort}
//             onChange={(e) => setSort(e.target.value)}
//           >
//             <option value="">Sort By</option>
//             <option value="price">Price</option>
//             <option value="name">Name</option>
//           </select>
//         </div>
//         {isAdmin && (
//           <div className="col-md-3 text-md-end">
//             <button className="btn btn-success shadow-sm" onClick={() => setShowModal(true)}>
//               ➕ Add Product
//             </button>
//           </div>
//         )}
//       </div>

//       {/* Product List */}
//       {/* <div className="row">
//         {loading ? (
//           Array.from({ length: 8 }).map((_, i) => (
//             <div className="col-sm-6 col-lg-3 mb-4" key={i}>
//               <Skeleton height={300} />
//             </div>
//           ))
//         ) : sorted.length === 0 ? (
//           <p className="text-center text-muted">No products match your filters.</p>
//         ) : (
//           sorted.map((product, index) => (
//             <div key={product.id} className="col-sm-6 col-lg-3 mb-4">
//               <Link to={`/product/${product.id}`} className="text-decoration-none">
//                 <div className="card product-card h-100 shadow-sm border-0 position-relative">
//                   {index < 10 && (
//                     <span className="badge bg-danger position-absolute top-0 start-0 m-1">
//                       {badges[index % badges.length]}
//                     </span>
//                   )}

//                   <div className="product-img-wrapper">
//                     <img
//                       src={product.thumbnail}
//                       alt={product.title}
//                       className="card-img-top product-img"
//                       onError={(e) => {
//                         e.target.onerror = null;
//                         e.target.src = "/placeholder.jpg";
//                       }}
//                     />
//                     <button
//                       className="wishlist-btn"
//                       aria-label="Add to wishlist"
//                       onClick={(e) => {
//                         e.stopPropagation();
//                         e.preventDefault();
//                         toggleWishlist(product.id);
//                       }}
//                     >
//                       {wishlist.includes(product.id) ? "❤" : "♡"}
//                     </button>
//                   </div>

//                   <div className="card-body d-flex flex-column justify-content-between">
//                     <div>
//                       <h5 className="card-title fw-bold">{product.title}</h5>
//                       <p className="card-text text-primary fw-semibold">${product.price}</p>
//                     </div>
//                     <p className="text-muted small mb-2">{product.category}</p>
//                   </div>
//                 </div>
//               </Link>
//             </div>
//           ))
//         )}
//       </div> */}

//       <section className="py-5 product-list-section">
//       <div className="container">
//         <h2 className="text-center mb-5 section-title">All Products</h2>
//         <div className="row">
//           {products.map((product) => (
//             <div key={product.id} className="col-md-3 col-lg-3 mb-4">
//               <div className="card product-card shadow-sm">
//                 <img
//                   src={product.thumbnail}
//                   className="card-img-top product-img"
//                   alt={product.name}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">{product.name}</h5>
//                   <p className="card-text text-muted">₹{product.price}</p>
//                   <div className="d-flex justify-content-between">
//                     <button
//                       className="btn btn-view"
//                       onClick={() => onView(product.id)}
//                     >
//                       View
//                     </button>
//                     <button
//                       className="btn btn-add"
//                       onClick={() => onAddToCart(product.id)}
//                     >
//                       Add to Cart
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//           {products.length === 0 && (
//             <p className="text-center">No products available.</p>
//           )}
//         </div>
//       </div>
//     </section>

//       {/* Add Product Modal */}
//       {showModal && <AddProductModal onClose={() => setShowModal(false)} />}
//     </div>
//   );
// };

// export default ProductList;
