

import React from "react";

import image from "../images/img.jpeg";

const imageAltText = "portfolio page image";


const projectList = [
  {
    title: "Library Genesis",
    description:
      "A website created using flask framework for accessing book pdfs.",
    url: "https://librarygenesis.onrender.com/",
  },
  {
    title: "Url Shortener",
    description:
      "Can generate shorter urls and even custom made urls.",
    url: "https://github.com/Risriddle/UrlShortener",
  },
  {
    title: "Movie Reviews",
    description:
      "Made using Django framework.Can review movies fetched from an api and view ratings and movie data.",
    url: "https://github.com/Risriddle/MovieReviewDjango",
  },
  {
    title: "Chat app",
    description:
      "Made using flask and websockets.enables private communication by creating different chat rooms which can be accessed by usernames",
    url: "https://github.com/Risriddle/chatApp",
  },
  {
  title: "Payment Portal",
    description:
      "A Payment gateway created using Razorpay api implemented in python(flask).Can be used for upi as well as card payments.Can be used as a template and integrated in websites.",
    url: "https://github.com/Risriddle/paymentPortal",
  },
  {
    title: "Online Compiler",
      description:
        "Made using MERN stack.",
      url: "https://github.com/Risriddle/onlineCompiler",
    },
    {
      title: "React Dictionary",
        description:
          "A dictionary made using react framework",
        url: "https://github.com/Risriddle/ReactDictionary",
      },
      {
        title: "Number Converter",
          description:
            "A conversion site to convert numbers from one base type to another.",
          url: "https://github.com/Risriddle/NumberConverter",
        },
        {
          title: "Alien Eliminator",
            description:
              "A game created using python's pygame library. Consists of three levels",
            url: "https://github.com/Risriddle/alienEliminator",
          },
          {
            title: "Send and Verify OTP",
              description:
                "An api for sending and verifying otps on mails.Made using python and brevo api.",
              url: "https://github.com/Risriddle/sendVerifyOTP",
            },
            {
              title: "Blog Express",
                description:
                  "A blog site created using express framework,mongoose,mongodb and jade(pug) template engine.",
                url: "https://github.com/Risriddle/BlogExpress",
              },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
