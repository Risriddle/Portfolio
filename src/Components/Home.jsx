import React, { useEffect, useState } from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";
import image from "../images/bgg.jpeg";

const imageAltText = "Home page vector background";

const Home = ({ name, title }) => {
  const [displayedName, setDisplayedName] = useState("");
  const [blink, setBlink] = useState(true);
  const [isNameComplete, setIsNameComplete] = useState(false);

  useEffect(() => {
    let nameIndex = 0;

    const intervalId = setInterval(() => {
      if (nameIndex < name.length) {
        setDisplayedName((prev) => prev + name[nameIndex]);
        nameIndex += 1;
      } else {
        setIsNameComplete(true);
        clearInterval(intervalId);
      }
    }, 150); // Adjust the speed of the typing effect here

    return () => clearInterval(intervalId);
  }, [name]);

  useEffect(() => {
    const blinkId = setInterval(() => {
      setBlink((prev) => !prev);
    }, 500); // Adjust the speed of the blinking cursor here

    return () => clearInterval(blinkId);
  }, []);

  const styles = `
    #home {
      position: relative;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow: hidden;
      border-radius: 20px; /* Rounded corners for the entire section */
    }

    .background {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      z-index: -1;
      border-radius: 20px;
    }

    .content {
      text-align: center;
      color: #fff;
      z-index: 1;
    }

    .content h1 {
      font-size: 3rem;
      margin-bottom: 1rem;
    }

    .content h2 {
      font-size: 2rem;
      margin: 0;
    }

    .cursor {
      display: inline-block;
      width: 2px;
      height: 2rem;
      background-color: #fff;
      animation: blink 0.5s step-end infinite;
    }

    @keyframes blink {
      from, to {
        background-color: transparent;
      }
      50% {
        background-color: #fff;
      }
    }

    .arrow {
      position: absolute;
      bottom: 3rem;
      left: 50%;
      transform: translateX(-50%);
      z-index: 1;
      cursor: pointer;
      animation: bounce 1s infinite; /* Define the bounce animation */
    }

    .arrow img {
      height: 3rem;
      width: 3rem;
      filter: invert(100%); /* Invert the color of the SVG to white */
    }

    @keyframes bounce {
      0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
      }
      40% {
        transform: translateY(-10px); /* Adjust the bounce height as needed */
      }
      60% {
        transform: translateY(-5px); /* Adjust the bounce height as needed */
      }
    }
  `;

  return (
    <section id="home">
      <style>{styles}</style>
      <img className="background" src={image} alt={imageAltText} />
      <div className="content">
        <h1>
          {displayedName}
          {!isNameComplete && (
            <span className="cursor" style={{ visibility: blink ? "visible" : "hidden" }}>
              |
            </span>
          )}
        </h1>
        <h2>{title}</h2>
      </div>
      <div className="arrow">
        <img src={arrowSvg} alt={imageAltText} />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
