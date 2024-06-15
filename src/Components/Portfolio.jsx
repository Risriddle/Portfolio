import React from "react";
import image from "../images/pt.jpeg"; // Make sure the image path is correct

const projectList = [
  {
    title: "Library Genesis",
    description: "A website created using Flask framework for accessing book pdfs.",
    url: "https://librarygenesis.onrender.com/",
  },
  {
    title: "Url Shortener",
    description: "Can generate shorter urls and even custom made urls.",
    url: "https://github.com/Risriddle/UrlShortener",
  },
  {
    title: "Movie Reviews",
    description:
      "Made using Django framework. Can review movies fetched from an API and view ratings and movie data.",
    url: "https://github.com/Risriddle/MovieReviewDjango",
  },
  {
    title: "Chat app",
    description:
      "Made using Flask and WebSockets. Enables private communication by creating different chat rooms.",
    url: "https://github.com/Risriddle/chatApp",
  },
  {
    title: "Payment Portal",
    description:
      "A Payment gateway created using Razorpay API implemented in Python (Flask). Can be used for UPI as well as card payments.",
    url: "https://github.com/Risriddle/paymentPortal",
  },
  {
    title: "React Dictionary",
    description: "A dictionary made using React framework.",
    url: "https://github.com/Risriddle/ReactDictionary",
  },
  {
    title: "Number Converter",
    description: "A conversion site to convert numbers from one base type to another.",
    url: "https://github.com/Risriddle/NumberConverter",
  },
  {
    title: "Send and Verify OTP",
    description: "An API for sending and verifying OTPs on mails. Made using Python and Brevo API.",
    url: "https://github.com/Risriddle/sendVerifyOTP",
  },
  {
    title: "Blog Express",
    description:
      "A blog site created using Express framework, Mongoose, MongoDB and Jade (Pug) template engine.",
    url: "https://github.com/Risriddle/BlogExpress",
  },
];

const Portfolio = () => {
  const styles = {
    section: {
      position: "relative",
      padding: "50px 0",
      color: "#fff", // White text color
      textAlign: "center",
      borderRadius: "20px", // Rounded corners
      overflow: "hidden",
      zIndex: 1, // Ensure content is on top of the background
    },
    backgroundContainer: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundImage: `url(${image})`,
      backgroundSize: "cover",
      backgroundPosition: "center",
      zIndex: -1, // Ensure the image is behind the content
      // opacity: 0.6, // Optional: Adjust opacity for readability
    },
    overlay: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      // backgroundColor: "rgba(0, 0, 0, 0.5)", // Dark overlay for readability
      zIndex: -1,
    },
    heading: {
      fontSize: "2.5rem",
      marginBottom: "2rem",
    },
    container: {
      display: "flex",
      flexDirection: "row",
      flexWrap: "wrap",
      justifyContent: "center",
      alignItems: "flex-start",
      gap: "20px",
      maxWidth: "1200px",
      margin: "0 auto",
      paddingTop: "20px", // Adjusted padding top for spacing
      position: "relative", // Ensure it sits above the background
      zIndex: 1,
    },
    projectBox: {
      backgroundColor: "white", // Dark gray background color for project cards
      padding: "20px",
      borderRadius: "8px",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      width: "300px",
      textAlign: "left",
      transition: "transform 0.3s ease",
      cursor: "pointer",
      textDecoration: "none",
      color: "black", // White text color
      display: "block",
      // Ensure pointer events are enabled
      pointerEvents: "auto",
    },
    projectTitle: {
      fontSize: "1.5rem",
      marginBottom: "0.5rem",
      fontWeight: "bold",
    },
    projectDescription: {
      fontSize: "1rem",
      color: "black", // Light gray text color for description
    },
  };

  return (
    <section style={styles.section} id="portfolio">
      <div style={styles.backgroundContainer}></div>
      <div style={styles.overlay}></div>
      <h2 style={styles.heading}>Portfolio</h2>
      <div style={styles.container}>
        {projectList.map((project) => (
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            key={project.title}
            style={styles.projectBox}
          >
            <h3 style={styles.projectTitle}>{project.title}</h3>
            <p style={styles.projectDescription}>{project.description}</p>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
