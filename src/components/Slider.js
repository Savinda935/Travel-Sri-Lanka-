import React, { useState } from "react";

const sliderContainerStyle = {
  position: "relative",
  width: "100%",
  maxWidth: "900px",
  margin: "0 auto 2rem auto",
  overflow: "hidden",
  borderRadius: "20px",
  boxShadow: "0 3px 10px rgba(0,0,0,0.2)",
  background: "#222"
};

const slideStyle = {
  width: "100%",
  height: "400px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#fff",
  position: "relative",
  transition: "opacity 0.5s, transform 0.5s",
  backgroundSize: "cover",
  backgroundPosition: "center"
};

const contentStyle = {
  background: "rgba(0,0,0,0.5)",
  padding: "2rem",
  borderRadius: "10px",
  maxWidth: "400px",
  marginLeft: "2rem"
};

const navBtnStyle = {
  position: "absolute",
  top: "50%",
  transform: "translateY(-50%)",
  background: "rgba(255,255,255,0.7)",
  border: "none",
  borderRadius: "50%",
  width: "48px",
  height: "48px",
  fontSize: "2rem",
  color: "#333",
  cursor: "pointer",
  zIndex: 2,
  boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
};

const dotContainerStyle = {
  position: "absolute",
  bottom: "20px",
  left: "50%",
  transform: "translateX(-50%)",
  display: "flex",
  gap: "8px"
};
const dotStyle = (active) => ({
  width: "12px",
  height: "12px",
  borderRadius: "50%",
  background: active ? "#c9a063" : "#fff",
  border: "2px solid #c9a063",
  cursor: "pointer"
});

const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const total = slides.length;

  const goTo = (idx) => setCurrent(idx);
  const prev = () => setCurrent((c) => (c - 1 + total) % total);
  const next = () => setCurrent((c) => (c + 1) % total);

  return (
    <div style={sliderContainerStyle}>
      {slides.map((slide, idx) => (
        <div
          key={idx}
          style={{
            ...slideStyle,
            backgroundImage: `url('${slide.image}')`,
            opacity: idx === current ? 1 : 0,
            pointerEvents: idx === current ? "auto" : "none",
            position: idx === current ? "relative" : "absolute",
            left: 0,
            top: 0,
            transition: "opacity 0.5s, transform 0.5s"
          }}
        >
          <div style={contentStyle}>
            <h2 style={{ fontSize: "2rem", marginBottom: "1rem", textTransform: "uppercase", color: "#c9a063" }}>{slide.title}</h2>
            <p style={{ fontSize: "1.1rem", marginBottom: "1.5rem" }}>{slide.description}</p>
            <button style={{
              background: "#c9a063",
              color: "#fff",
              border: "none",
              borderRadius: "5px",
              padding: "12px 28px",
              fontSize: "1rem",
              cursor: "pointer",
              boxShadow: "0 4px 6px rgba(0,0,0,0.2)"
            }}>Read More</button>
          </div>
        </div>
      ))}
      <button style={{ ...navBtnStyle, left: "16px" }} onClick={prev} aria-label="Previous Slide">&#8592;</button>
      <button style={{ ...navBtnStyle, right: "16px" }} onClick={next} aria-label="Next Slide">&#8594;</button>
      <div style={dotContainerStyle}>
        {slides.map((_, idx) => (
          <span key={idx} style={dotStyle(idx === current)} onClick={() => goTo(idx)} />
        ))}
      </div>
    </div>
  );
};

export default Slider; 