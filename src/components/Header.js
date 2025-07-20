import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    console.log("Search query:", searchQuery);
    // Implement search functionality here
  };

  return (
    <header
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Transparent black
        padding: "20px",
        position: "sticky",
        top: "0",
        zIndex: "1000",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        backdropFilter: "blur(5px)", // Adds a blur effect
        transition: "background-color 0.3s ease",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Logo */}
        <h1 style={{ color: "#fff", fontSize: "1.8rem", fontWeight: "bold" }}>
          Travel Guide
        </h1>

        {/* Navigation and Search */}
        <nav
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <ul
            style={{
              display: "flex",
              listStyle: "none",
              margin: "0",
              padding: "0",
            }}
          >
            {[{ name: "Home", link: "/" }, { name: "Destinations", link: "/destinations" }, { name: "About Us", link: "/about" }, { name: "Contact", link: "/contact" }].map((item, index) => (
              <li
                key={index}
                style={{
                  margin: "0 15px",
                  position: "relative",
                }}
              >
                <a
                  href={item.link}
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                    fontSize: "1.2rem",
                    fontWeight: "500",
                    transition: "color 0.3s",
                  }}
                  onMouseOver={(e) => (e.target.style.color = "#f1f1f1")}
                  onMouseOut={(e) => (e.target.style.color = "#fff")}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>

          {/* Search Bar */}
          <form
            onSubmit={handleSearch}
            style={{
              marginLeft: "20px",
              display: "flex",
              alignItems: "center",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              borderRadius: "5px",
              padding: "5px 10px",
            }}
          >
            <input
              type="text"
              placeholder="Search..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              style={{
                border: "none",
                backgroundColor: "transparent",
                color: "#fff",
                outline: "none",
                padding: "5px",
                fontSize: "1rem",
              }}
            />
            <button
              type="submit"
              style={{
                backgroundColor: "transparent",
                border: "none",
                color: "#fff",
                cursor: "pointer",
                padding: "5px",
              }}
            >
              🔍
            </button>
          </form>
        </nav>

        {/* Hamburger Menu for Mobile */}
        <div
          style={{
            display: "none",
            cursor: "pointer",
          }}
          onClick={toggleMenu}
          className="hamburger-menu"
        >
          <span
            style={{
              display: "block",
              width: "25px",
              height: "3px",
              backgroundColor: "#fff",
              marginBottom: "5px",
            }}
          ></span>
          <span
            style={{
              display: "block",
              width: "25px",
              height: "3px",
              backgroundColor: "#fff",
              marginBottom: "5px",
            }}
          ></span>
          <span
            style={{
              display: "block",
              width: "25px",
              height: "3px",
              backgroundColor: "#fff",
            }}
          ></span>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.9)", // Darker for the mobile menu
            position: "absolute",
            top: "80px",
            left: "0",
            width: "100%",
            padding: "10px 0",
            zIndex: "1000",
          }}
        >
          <ul
            style={{
              listStyle: "none",
              margin: "0",
              padding: "0",
              textAlign: "center",
            }}
          >
            {[{ name: "Home", link: "/" }, { name: "Destinations", link: "/destinations" }, { name: "About Us", link: "/about" }, { name: "Contact", link: "/contact" }].map((item, index) => (
              <li
                key={index}
                style={{
                  padding: "15px 0",
                  borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
                }}
              >
                <a
                  href={item.link}
                  style={{
                    textDecoration: "none",
                    color: "#fff",
                    fontSize: "1.2rem",
                    fontWeight: "500",
                  }}
                >
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
