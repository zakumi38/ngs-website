import React from "react";
import image0 from "../../../assets/about-image.png";
import image from "../../../assets/team_slide_01.jpg";
import image2 from "../../../assets/team_slide_02.jpg";
import image3 from "../../../assets/team_slide_03.jpg";
import image4 from "../../../assets/team_slide_04.jpg";
import icon1 from "../../../assets/icon/icon1.jpg";
import icon2 from "../../../assets/icon/icon2.jpg";
import icon3 from "../../../assets/icon/icon3.jpg";
import icon4 from "../../../assets/icon/icon4.jpg";
import icon5 from "../../../assets/icon/icon5.jpg";
import icon6 from "../../../assets/icon/icon6.jpg";
import aboutStyles from "./about.module.sass";
function About() {
  const cards = [
    {
      photo: icon1,
      title: "GIFT SERTIFICATE",
      text: "Certificates for payment of services and equipment",
    },
    {
      photo: icon2,
      title: "DOUBLE SPEED",
      text: "Magna aliquyam erat, sed diam voluptua at vero eos et accusam",
    },
    {
      photo: icon3,
      title: "IP ADDRESS",
      text: "Additional static IP address vero eos et accusam et justo duo",
    },
    {
      photo: icon4,
      title: "CABLE INSURANCE",
      text: "Three free call wizard to repair the cable in the apartment",
    },
    {
      photo: icon5,
      title: "ROUTER SETUP",
      text: "Call a specialist to configure the router for free lifetime",
    },
    {
      photo: icon6,
      title: "HOT RESERVE",
      text: "Redundant connectivity to Lanet and switch port",
    },
  ];
  const cardItems = cards.map((card) => (
    <div className={aboutStyles.card}>
      <div className={aboutStyles.image}>
        <img src={card.photo} alt="icon" />
      </div>

      <div className={aboutStyles.card_title}>
        <h3>{card.title}</h3>
      </div>

      <p>{card.text}</p>
    </div>
  ));
  return (
    <div>
      <section className={aboutStyles.about_intro}>
        <div className={aboutStyles.container}>
          <div className={aboutStyles.about_info}>
            <div className={aboutStyles.about_image}>
              <img src={image0} alt="" />
            </div>
            <div className={aboutStyles.item_content}>
              <h5 className={aboutStyles.content_title}>About MaxiCom</h5>
              <h3 className={aboutStyles.content_name}>
                #1 Internet Service Provider Company In Country
              </h3>
              <h3 className={aboutStyles.content_service}>
                We have been providing internet and telecom services for more
                than 30 years!
              </h3>
              <p className={aboutStyles.content_description}>
                Having been in business for so many years, we are one of the
                most experienced internet service providers around. Indeed,
                MaxiCom was one of the first providers of business broadband in
                the country.
              </p>
              <div className={aboutStyles.content_list}>
                <ul>
                  <li>Award winning services</li>
                  <li>End-to-end solutions</li>
                  <li>Dedicated management</li>
                </ul>
                <ul>
                  <li>Full project management</li>
                  <li>Industry leading SLAs</li>
                  <li>Complete option range</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div>
        <div className={aboutStyles.cards}>{cardItems}</div>
      </div>

      <div>
        <img src={image} alt="" id="image" />
        <div className={aboutStyles.name}>
          <ul>
            <li
              onClick={() => {
                document.getElementById("image").src = image;
              }}
            >
              <h1>
                Ronald May <span className={aboutStyles.role}>Founder</span>
              </h1>
            </li>
            <li
              onClick={() => {
                document.getElementById("image").src = image2;
              }}
            >
              <h1>
                Natalie Thomas <span className={aboutStyles.role}>Trader</span>
              </h1>
            </li>
            <li
              onClick={() => {
                document.getElementById("image").src = image3;
              }}
            >
              <h1>
                Frank Farjado <span className={aboutStyles.role}>Manager</span>
              </h1>
            </li>
            <li
              onClick={() => {
                document.getElementById("image").src = image4;
              }}
            >
              <h1>
                Helen Freeman <span className={aboutStyles.role}>Support</span>
              </h1>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
