import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import footerbc from "../images/footerbc.jpg";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundImage: `url(${footerbc})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        color: "#fff",
        padding: "40px 20px",
        textAlign: "center",
        fontSize: "1rem",
        position: "relative",
        backdropFilter: "blur(5px)",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(0, 0, 0, 0.09)", // Adds a semi-transparent overlay
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        {/* Footer Links Section */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-around",
            flexWrap: "wrap",
            marginBottom: "30px",
          }}
        >
          <div style={{ margin: "20px" }}>
            <h4>Quick Links</h4>
            <ul
              style={{
                listStyle: "none",
                padding: "0",
                margin: "0",
              }}
            >
              {["Home", "Destinations", "About Us", "Contact"].map((link, index) => (
                <li key={index}>
                  <a
                    href={`/${link.toLowerCase().replace(/\s/g, "")}`}
                    style={{
                      textDecoration: "none",
                      color: "#fff",
                      fontSize: "1rem",
                      transition: "color 0.3s",
                    }}
                    onMouseOver={(e) => (e.target.style.color = "#c9a063")}
                    onMouseOut={(e) => (e.target.style.color = "#fff")}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div style={{ margin: "20px" }}>
            <h4>Follow Us</h4>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                gap: "20px",
              }}
            >
              {[FaFacebook, FaTwitter, FaInstagram, FaLinkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  style={{
                    color: "#fff",
                    fontSize: "1.5rem",
                    transition: "color 0.3s",
                  }}
                  onMouseOver={(e) => (e.target.style.color = "#c9a063")}
                  onMouseOut={(e) => (e.target.style.color = "#fff")}
                >
                  <Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Subscription Form Section */}
          <div style={{ margin: "20px" }}>
            <h4>Subscribe to Our Newsletter</h4>
            <form
              action="#"
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <input
                type="email"
                placeholder="Enter your email"
                style={{
                  padding: "10px",
                  width: "250px",
                  marginBottom: "10px",
                  borderRadius: "5px",
                  border: "1px solid #ddd",
                  fontSize: "1rem",
                }}
              />
              <button
                type="submit"
                style={{
                  padding: "10px 20px",
                  backgroundColor: "#c9a063",
                  color: "#fff",
                  border: "none",
                  borderRadius: "5px",
                  fontSize: "1rem",
                  cursor: "pointer",
                }}
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Back to Top Button */}
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          style={{
            position: "absolute",
            right: "20px",
            bottom: "20px",
            backgroundColor: "#c9a063",
            color: "#fff",
            border: "none",
            borderRadius: "50%",
            width: "50px",
            height: "50px",
            fontSize: "1.5rem",
            cursor: "pointer",
            boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          }}
        >
          ↑
        </button>
      </div>

      <div style={{ marginTop: "30px" }}>
        <p style={{ fontSize: "1rem" }}>
          &copy; {new Date().getFullYear()} Travel Guide. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
