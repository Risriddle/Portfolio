import React from "react";

const Header = () => {
  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        gap: "2rem",
        background: "rgba(255, 255, 255, 0.9)",
        padding: "1rem 2rem",
        top: 0,
        width: "100%",
        zIndex: 10,
        boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
      }}
    >
      <a href="#home" style={styles.link}>Home</a>
      <a href="#about" style={styles.link}>About</a>
      <a href="#portfolio" style={styles.link}>Portfolio</a>
      <a href="#footer" style={styles.link}>Contact</a>
    </div>
  );
};

const styles = {
  link: {
    textDecoration: "none",
    color: "#333",
    fontSize: "1.2rem",
    fontWeight: "bold",
    textTransform: "uppercase",
    padding: "0.5rem 1rem",
    borderRadius: "4px",
    transition: "background-color 0.3s ease, color 0.3s ease",
  },
};

export default Header;
