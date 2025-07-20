import React from "react";
import Carousel from "../components/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import carousel1 from "../images/carousel1.jpg";
import carousel2 from "../images/carousel2.jpg";
import culturalcard from "../images/culturalcard.jpg";
import sceniccard from "../images/sceniccard.jpg";
import bestcard from "../images/bestcard.jpg";
import wildlifecard from "../images/wildlifecard.jpg";
import aboutus from "../images/aboutus.jpg";
import bcvideo from "../videos/bcvideo.mp4";
import carousel from "../images/carousel.jpg";
import Header from "../components/Header";
import Footer from "../components/Footer";
import mirissa from "../images/mirissa.jpg";
import hikkaduwa from "../images/hikkaduwa.jpg";
import ealla from "../images/ealla.jpg";
import kandy from "../images/kandy.jpg";
import colombo from "../images/colombo.jpg";
import negambo from "../images/negambo.jpg";
import anuradhapura from "../images/anuradhapura.jpg";
import daytourbc from "../images/daytourbc.jpg";
import guid from "../images/guid.png";
import tripadvisor from "../images/tripadvisor.png";
import tour from "../images/tour.png";
import Itinerary from "../images/Itinerary.png";
import map from "../images/map.png";
import { useSpring, animated } from 'react-spring';

const TravelHome = () => {
  return (
    <div style={{ position: "relative", minHeight: "100vh", backgroundColor: "#f4f4f4" }}>
      <div style={{ position: "absolute", top: 0, left: 0, width: "100%", zIndex: 2 }}>
        <Header />
      </div>
      <div style={{ width: "100vw", height: "100vh", position: "relative", zIndex: 1 }}>
        <Carousel />
      </div>

      

      {/* Welcome Section */}
      <section
        style={{
          padding: "50px",
          textAlign: "center",
          backgroundColor: "#fff",
        }}
      >
        <h1
          style={{
            fontSize: "3.5rem",
            color: "#c9a063",
            marginBottom: "20px",
          }}
        >
          Welcome to Sri Lanka
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#666" }}>
          Sri Lanka is a tropical paradise known for its golden beaches, lush tea plantations, ancient ruins, and vibrant culture. Explore its diverse landscapes, from misty mountains to bustling cities, and immerse yourself in its rich history and traditions.
        </p>
      </section>

      <section
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "50px",
    backgroundColor: "#f9f9f9",
  }}
>
  {/* Left Section: Content */}
  <div style={{ width: "55%" }}>
    <h2
      style={{
        fontSize: "2.5rem",
        color: "#003366", // Dark Blue for header
        marginBottom: "20px",
      }}
    >
      RENT A TOUR GUIDE IN SRI LANKA
    </h2>
    <p style={{ fontSize: "1.2rem", color: "#666", marginBottom: "20px" }}>
      Are you looking for a tour guide in Sri Lanka or a Driver guide with excellent service and reasonable prices? We guarantee to select our professional national guide, Chauffeur guide, or Driver guide. With 10 years of experience in the tourism industry, we have handled many groups and worked with thousands of tourists from different parts of the world who speak various languages.
    </p>

    {/* Call to Action */}
    <div>
      <button
        style={{
          padding: "15px 30px",
          fontSize: "1rem",
          color: "white",
          backgroundColor: "#c9a063",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          transition: "background-color 0.3s ease",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#b18b57")}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#c9a063")}
        onClick={() => window.location.href = "/bookguide"}
      >
        BOOK NOW & GET THE BEST PRICE!
      </button>
    </div>

    {/* 'Read More' Link */}
    <div style={{ marginTop: "20px" }}>
      <a
        href="/read-more"
        style={{
          fontSize: "1rem",
          color: "#003366",
          textDecoration: "none",
          fontWeight: "bold",
        }}
      >
        Read More
      </a>
    </div>
  </div>

  {/* Right Section: Image and Icons */}
  <div style={{ width: "40%", textAlign: "center" }}>
    {/* Image */}
    <img
      src={guid} // Replace with actual image path
      alt="Tour Guide"
      style={{
        width: "100%",
        borderRadius: "10px",
        marginBottom: "20px",
      }}
    />

    {/* Icon Section */}
    <div style={{ marginTop: "20px" }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div
          style={{
            backgroundColor: "#003366",
            padding: "10px",
            borderRadius: "50%",
            marginBottom: "10px",
          }}
        >
          <img
            src={tripadvisor}  // Replace with actual TripAdvisor icon
            alt="TripAdvisor"
            style={{ width: "40px", height: "40px" }}
          />
        </div>
        <p style={{ fontSize: "1rem", color: "#003366", fontWeight: "bold" }}>
          Highly recommended on TripAdvisor
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            backgroundColor: "#003366",
            padding: "10px",
            borderRadius: "50%",
            marginBottom: "10px",
          }}
        >
          <img
             src={tour}  // Replace with actual guide icon
            alt="Tour Guide"
            style={{ width: "40px", height: "40px" }}
          />
        </div>
        <p style={{ fontSize: "1rem", color: "#003366", fontWeight: "bold" }}>
          Professionally Trained & Experienced Tour Guides
        </p>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            backgroundColor: "#003366",
            padding: "10px",
            borderRadius: "50%",
            marginBottom: "10px",
          }}
        >
          <img
            src={Itinerary}   // Replace with actual itinerary icon
            alt="Itinerary"
            style={{ width: "40px", height: "40px" }}
          />
        </div>
        <p style={{ fontSize: "1rem", color: "#003366", fontWeight: "bold" }}>
          Tailor-made itineraries for Sri Lanka Tours
        </p>
      </div>
    </div>
  </div>
</section>


    {/* Day Tours Section */}
{/* Day Tours Section */}
<section
  style={{
    padding: "50px",
    textAlign: "center",
    backgroundColor: "#fff",
  }}
>
  <h2
    style={{
      fontSize: "2.5rem",
      color: "#c9a063",
      marginBottom: "20px",
    }}
  >
    Sri Lanka's Day Tours
  </h2>
  <p style={{ fontSize: "1.2rem", color: "#666", marginBottom: "20px" }}>
    Rent A Tour Guide in Sri Lanka organizes several one-day tours from Colombo and Negombo. Check out our extended itinerary section for further details. If the tour of your choice is not listed on our website, just contact us via email, and we will reach out to you and make it happen for you!
  </p>

  {/* Day Tour Cards */}
  <div
    style={{
      display: "flex",
      justifyContent: "space-around",
      alignItems: "center",
      flexWrap: "wrap",
    }}
  >
    {[
      {
        name: "Colombo City Tour",
        description: "Explore Colombo's landmarks, shopping districts, and cultural highlights in a day.",
        image: colombo,
        link: "/colomboday",
      },
      {
        name: "Negombo Lagoon Tour",
        description: "Enjoy a relaxing boat ride on the Negombo Lagoon and experience local fishing culture.",
        image: negambo,
        link: "/negombolagoontour",
      },
      {
        name: "Sigiriya & Dambulla",
        description: "Visit the iconic Sigiriya Rock Fortress and the historic Dambulla Cave Temple.",
        image: carousel,
        link: "/sigiriya",
      },
      {
        name: "Yala Safari Adventure",
        description: "A thrilling one-day safari to spot leopards, elephants, and other wildlife.",
        image: wildlifecard,
        link: "/yala",
      },
    ].map((tour, index) => (
      <div
        key={index}
        style={{
          width: "22%",
          textAlign: "center",
          marginBottom: "20px",
          border: "1px solid #ddd",
          borderRadius: "10px",
          padding: "20px",
          backgroundColor: "#fff",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          transition: "all 0.3s ease",
          transform: "scale(1)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "scale(1.05)";
          e.currentTarget.style.boxShadow = "0 8px 16px rgba(0, 0, 0, 0.2)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
        }}
      >
        <img
          src={tour.image}
          alt={tour.name}
          style={{
            width: "100%",
            height: "200px",
            objectFit: "cover",
            borderRadius: "10px",
            marginBottom: "20px",
          }}
        />
        <h3 style={{ color: "#c9a063" }}>{tour.name}</h3>
        <p style={{ color: "#666" }}>{tour.description}</p>
        <a
          href={tour.link}
          style={{
            display: "inline-block",
            marginTop: "15px",
            padding: "10px 20px",
            color: "#c9a063",
            border: "1px solid #c9a063",
            borderRadius: "5px",
            textDecoration: "none",
            fontSize: "1rem",
            transition: "all 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#c9a063";
            e.target.style.color = "#fff";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "transparent";
            e.target.style.color = "#c9a063";
          }}
        >
          View More
        </a>
      </div>
    ))}
  </div>
</section>




      {/* Round Tour Packages Section */}
<section
  style={{
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexWrap: "wrap",
    padding: "50px",
    backgroundColor: "#f9f9f9",
  }}
>
  <h2
    style={{
      fontSize: "2.5rem",
      color: "#c9a063",
      textAlign: "center",
      width: "100%",
      marginBottom: "20px",
    }}
  >
    Round Tour Packages
  </h2>
  <p
    style={{
      fontSize: "1.2rem",
      color: "#666",
      textAlign: "center",
      width: "100%",
      marginBottom: "30px",
    }}
  >
    Rent A Tour Guide in Sri Lanka organizes several Round Tour Packages to help you experience the nature, culture, and history of Sri Lanka. Each package is customized for you to explore Sri Lanka while enjoying a comfortable stay!
  </p>
  {[
    {
      src: anuradhapura,
      title: "Cultural Adventure",
      text: "Explore Sri Lanka's ancient cities, iconic temples, and cultural landmarks in a comprehensive round tour.",
    },
    {
      src: sceniccard,
      title: "Nature & Scenic Tour",
      text: "Travel through lush tea plantations, misty mountains, and serene beaches, enjoying Sri Lanka's natural beauty.",
    },
    {
      src: wildlifecard,
      title: "Wildlife & Adventure",
      text: "Experience thrilling safaris, wildlife sanctuaries, and adventurous treks with our round tour packages.",
    },
    {
      src: bestcard,
      title: "Ultimate Sri Lanka Tour",
      text: "Cover all must-visit destinations, from the cultural triangle to the southern beaches, in a perfectly tailored itinerary.",
    },
  ].map((card, index) => (
    <div
      key={index}
      style={{
        width: "30%",
        textAlign: "center",
        marginBottom: "20px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        padding: "20px",
        backgroundColor: "#fff",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        transition: "all 0.3s ease",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "scale(1.05)";
        e.currentTarget.style.boxShadow = "0 6px 12px rgba(0, 0, 0, 0.2)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "scale(1)";
        e.currentTarget.style.boxShadow = "0 4px 6px rgba(0, 0, 0, 0.1)";
      }}
    >
      <img
        src={card.src}
        alt={card.title}
        style={{
          width: "100%",
          height: "200px",
          objectFit: "cover",
          borderRadius: "10px",
          marginBottom: "20px",
        }}
      />
      <h3 style={{ color: "#c9a063" }}>{card.title}</h3>
      <p style={{ color: "#666" }}>{card.text}</p>
    </div>
  ))}
</section>


      {/* Explore More About Us Section */}
      <section
  style={{
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "50px",
    backgroundColor: "#fff",
    backgroundImage: `url(${hikkaduwa})`,
    backgroundSize: "cover",
    backgroundPosition: "top-left",
    marginBottom: "100px",
  }}
>
  <div style={{ width: "55%" }}>
    <h2
      style={{
        fontSize: "2rem",
        color: "white",
        marginBottom: "20px",
      }}
    >
      Explore More About Us
    </h2>
    <p style={{ fontSize: "1.2rem", color: "white", marginBottom: "20px" }}>
      At Sri Lanka Tourism, we offer curated packages for all types of travelers. Whether you're looking for adventure, relaxation, culture, or wildlife, we provide bespoke tours tailored to your preferences.
    </p>
  </div>
  <div style={{ width: "40%", textAlign: "center" }}>
    <button
      style={{
        padding: "15px 30px",
        fontSize: "1rem",
        color: "white",
        backgroundColor: "#c9a063",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#b18b57")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#c9a063")}
      onClick={() => window.location.href = "/about-us"}
    >
      About Us
    </button>
  </div>
</section>

{/* Things to Do in Sri Lanka Section */}
<section
  style={{
    padding: "50px",
    backgroundColor: "#f4f4f4",
    textAlign: "center",
  }}
>
  <h2
    style={{
      fontSize: "2.5rem",
      color: "#c9a063",
      marginBottom: "20px",
    }}
  >
    Things to Do in Sri Lanka
  </h2>
  <p
    style={{
      fontSize: "1.2rem",
      color: "#666",
      marginBottom: "30px",
      maxWidth: "800px",
      margin: "0 auto",
    }}
  >
    We want to share Sri Lanka's extraordinarily diverse and authentic story
    with the rest of the world. Discover thousands of ways to fall in love with
    our home and plan the perfect trip with local expertise, tips, and insights.
    From where to eat, what to do, and who to meet, let us guide you to your
    next unforgettable memory.
  </p>

  <div
    style={{
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      flexWrap: "wrap",
      paddingTop: "30px",
    }}
  >
    {/* Left Content */}
    <div
      style={{
        width: "45%",
        textAlign: "left",
      }}
    >
      <h3
        style={{
          color: "#003366",
          fontSize: "2rem",
          marginBottom: "15px",
        }}
      >
        Why Visit Sri Lanka?
      </h3>
      <ul
        style={{
          listStyle: "none",
          padding: "0",
          color: "#666",
          fontSize: "1rem",
          lineHeight: "1.8",
        }}
      >
        <li>🏖️ Golden beaches and turquoise waters</li>
        <li>🌄 Scenic tea plantations and misty mountains</li>
        <li>🌿 Lush rainforests and wildlife safaris</li>
        <li>🏛️ Ancient temples and UNESCO Heritage sites</li>
        <li>🍛 Authentic Sri Lankan cuisine and spices</li>
        <li>🎭 Vibrant festivals and rich cultural heritage</li>
      </ul>
    </div>

    {/* Map Image */}
    <div
      style={{
        width: "50%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <img
        src={map}
        alt="Sri Lanka Map"
        style={{
          maxWidth: "100%",
          borderRadius: "15px",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
        }}
      />
    </div>
  </div>

  {/* Call to Action */}
  <div
    style={{
      marginTop: "40px",
    }}
  >
    <button
      style={{
        padding: "15px 30px",
        fontSize: "1rem",
        backgroundColor: "#c9a063",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer",
        transition: "background-color 0.3s ease",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#b18b57")}
      onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#c9a063")}
      onClick={() => window.location.href = "/plan-your-trip"}
    >
      Plan Your Trip Now
    </button>
  </div>
</section>



      <Footer />
    </div>
  );
};

export default TravelHome;
