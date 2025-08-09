const FilterBar = ({ categoryFilter, setCategoryFilter, sortOption, setSortOption }) => {
  const categories = ["All", "smartphones", "laptops", "fragrances", "skincare", "groceries", "home-decoration"];

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
      <select
        value={categoryFilter}
        onChange={(e) => setCategoryFilter(e.target.value)}
        className="px-4 py-2 rounded border"
      >
        {categories.map((cat, idx) => (
          <option key={idx} value={cat}>
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </option>
        ))}
      </select>

      <select
        value={sortOption}
        onChange={(e) => setSortOption(e.target.value)}
        className="px-4 py-2 rounded border"
      >
        <option value="">Sort By</option>
        <option value="price-asc">Price Low → High</option>
        <option value="price-desc">Price High → Low</option>
        <option value="name-asc">Name A-Z</option>
        <option value="name-desc">Name Z-A</option>
      </select>
    </div>
  );
};

export default FilterBar;
