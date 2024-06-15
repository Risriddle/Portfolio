import React from "react";
import image from "../images/ab.jpeg";

const imageAltText = "blue abstract background";

const description =
  "I'm a BTech student studying at ABVGIET Technical University. I enjoy creating and building using computers and programming languages.";

const skillsList = [
  "Python",
  "Flask",
  "Django",
  "Nodejs",
  "Mongodb",
  "MySQL",
  "Express",
  "Java",
  "C++",
  "MERN",
];

const detailOrQuote =
  "I am a developer constantly learning new ways to interact with computers and get better at it. Apart from coding I am into astronomy, spirituality, and reading books.";

const About = () => {
  const styles = {
    section: {
      position: "relative",
      overflow: "hidden",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      padding: "40px 20px", // Add padding to create space
    },
    background: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      objectFit: "cover",
      zIndex: -1,
      // filter: "brightness(20%)", // Optional: adjust brightness for overlay effect
    },
    content: {
      position: "relative",
      color:"white",
      // backgroundColor: "rgba(255, 255, 255, 0.85)", // Slightly reduce opacity
      padding: "20px",
      // borderRadius: "8px",
      // boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      // maxWidth: "800px",
      // margin: "0 auto",
      textAlign: "center",
      // zIndex: 1,
    },
    heading: {
      fontSize: "28px",
      color: "white",
      marginBottom: "15px",
    },
    large: {
      fontSize: "18px",
      lineHeight: "1.6",
      color: "white",
    },
    hr: {
      border: "none",
      borderTop: "1px solid #ccc",
      margin: "20px 0",
    },
    list: {
      listStyleType: "none",
      padding: "0",
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
    },
    listItem: {
      fontSize: "16px",
      color: "black",
      marginBottom: "8px",
      marginRight: "10px",
      padding: "8px",
      backgroundColor: "#f0f0f0",
      borderRadius: "4px",
    },
    quote: {
      fontSize: "16px",
      color: "white",
      lineHeight: "1.6",
    },
  };

  return (
    <section style={styles.section} id="about">
      <img style={styles.background} src={image} alt={imageAltText} />
      <div style={styles.content}>
        <h2 style={styles.heading}>About Myself</h2>
        <p style={styles.large}>{description}</p>
        <hr style={styles.hr} />
        <h2 style={styles.heading}>Tech Stack & Skills</h2>
        <ul style={styles.list}>
          {skillsList.map((skill, index) => (
            <li key={index} style={styles.listItem}>
              {skill}
            </li>
          ))}
        </ul>
        <hr style={styles.hr} />
        <p style={styles.quote}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
