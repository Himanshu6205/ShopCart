import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import productData from "./products.json"; // Importing products JSON
import SelectedCategory from "./componets/SelectedCategory";

const title = (
  <h2>
    Search Your One From <span>Thousand</span> Of Products
  </h2>
);

const desc = "We have the largest collection of products ";

const bannerList = [
  { iconName: "icofont-users-alt-4", text: "1.5 Million Customers" },
  { iconName: "icofont-notification", text: "More than 2000 Merchants" },
  { iconName: "icofont-globe", text: "Buy Anything Online" },
];

const Banner = () => {
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(productData);

  // Handle search input changes
  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setSearchInput(searchTerm);

    // Filter products based on the search term
    if (searchTerm) {
      const filtered = productData.filter((product) =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredProducts(filtered);
    } else {
      // If the search input is empty, show all products again
      setFilteredProducts(productData);
    }
  };

  return (
    <div className="banner-section style-4">
      <div className="container">
        <div className="banner-content">
          {title}

          <form>
            <SelectedCategory select={"all"} />
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search your product"
              value={searchInput}
              onChange={handleSearch}
            />
            <button type="submit">
              <i className="icofont-search-2"></i>
            </button>
          </form>

          <p>{desc}</p>

          {/* Display filtered products */}
          <ul className="lab-ul">
            {searchInput &&
              filteredProducts.map((product, i) => (
                <li key={i}>
                  <Link to={`/shop/${product.id}`}>{product.name}</Link>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Banner;
