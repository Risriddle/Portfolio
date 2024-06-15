import React from "react";
import PropTypes from "prop-types";

import devDotToIcon from "../images/socials/devdotto.svg";
import envelopeIcon from "../images/socials/envelope.svg";
import gitHubIcon from "../images/socials/github.svg";
import instagramIcon from "../images/socials/instagram.svg";
import linkedInIcon from "../images/socials/linkedin.svg";
import mediumIcon from "../images/socials/medium.svg";
import twitterIcon from "../images/socials/twitter.svg";
import youTubeIcon from "../images/socials/youtube.svg";

const Footer = (props) => {
  const {
    devDotTo,
    email,
    gitHub,
    instagram,
    linkedIn,
    medium,
    name,
    // primaryColor,
    twitter,
    youTube,
  } = props;

  const styles = {
    footer: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "2.5rem",
      padding: "5rem 0 3rem",
      background: "linear-gradient(135deg, #000000, #6A0DAD)", // Gradient background from black to purple
      width: "100vw",
      position: "relative",
      color: "#fff",
      borderRadius: "20px", // Rounded corners
    },
    micIcon: {
      height: "50px",
      width: "50px",
      position: "absolute",
      top: "1rem",
      left: "1rem",
    },
    socialIcons: {
      display: "flex",
      justifyContent: "center",
      gap: "2.5rem",
    },
    link: {
      textDecoration: "none",
      color: "#fff",
      transition: "color 0.3s ease",
    },
    socialIcon: {
      height: "30px",
      width: "30px",
    },
  };

  return (
    <div id="footer" style={styles.footer}>
      {/* <img src={purpleMicIcon} alt="Purple Mic" style={styles.micIcon} /> */}
      <div style={styles.socialIcons}>
        {email && (
          <a href={`mailto:${email}`} style={styles.link}>
            <img src={envelopeIcon} alt="email" style={styles.socialIcon} />
          </a>
        )}
        {devDotTo && (
          <a
            href={`https://dev.to/${devDotTo}`}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            <img src={devDotToIcon} alt="Dev.to" style={styles.socialIcon} />
          </a>
        )}
        {gitHub && (
          <a
            href={`https://github.com/${gitHub}`}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            <img src={gitHubIcon} alt="GitHub" style={styles.socialIcon} />
          </a>
        )}
        {instagram && (
          <a
            href={`https://www.instagram.com/${instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            <img src={instagramIcon} alt="Instagram" style={styles.socialIcon} />
          </a>
        )}
        {linkedIn && (
          <a
            href={`https://www.linkedin.com/in/${linkedIn}`}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            <img src={linkedInIcon} alt="LinkedIn" style={styles.socialIcon} />
          </a>
        )}
        {medium && (
          <a
            href={`https://medium.com/@${medium}`}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            <img src={mediumIcon} alt="Medium" style={styles.socialIcon} />
          </a>
        )}
        {twitter && (
          <a
            href={`https://twitter.com/${twitter}`}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            <img src={twitterIcon} alt="Twitter" style={styles.socialIcon} />
          </a>
        )}
        {youTube && (
          <a
            href={`https://www.youtube.com/c/${youTube}`}
            target="_blank"
            rel="noopener noreferrer"
            style={styles.link}
          >
            <img src={youTubeIcon} alt="YouTube" style={styles.socialIcon} />
          </a>
        )}
      </div>
      <p className="small" style={{ marginTop: 0 }}>
        Created by {name}
      </p>
    </div>
  );
};

Footer.defaultProps = {
  name: "",
};

Footer.propTypes = {
  devDotTo: PropTypes.string,
  email: PropTypes.string,
  gitHub: PropTypes.string,
  instagram: PropTypes.string,
  linkedIn: PropTypes.string,
  medium: PropTypes.string,
  name: PropTypes.string.isRequired,
  primaryColor: PropTypes.string,
  twitter: PropTypes.string,
  youTube: PropTypes.string,
};

export default Footer;
