import React from "react";
import CountUp from "react-countup";
import { Link } from "react-router-dom";

const subTitle = "Wanna be Our Part?";
const title = "Join the #ZDGarage Team";
const desc = "Join our team and get 25% discound on every products!";
const btnText = "Join Us";

const countList = [
  {
    iconName: "icofont-users-alt-4",
    count: "150",
    text: "Partners",
  },
  {
    iconName: "icofont-graduate-alt",
    count: "200",
    text: "Certified Employee Engineer",
  },
  {
    iconName: "icofont-notification",
    count: "300",
    text: "Benefits",
  },
];

const AboutUs = () => {
  return (
    <div className="instructor-section style-2 padding-tb section-bg-ash">
      <div className="container">
        <div className="section-wrapper">
          <div className="row g-4 justify-content-center align-items-center row-cols-1 row-cols-md-2 row-cols-xl-3">
            <div className="col">
              {countList.map((val, i) => (
                <div key={i} className="count-item">
                  <div className="count-inner">
                    <div className="count-icon">
                      <i className={val.iconName}></i>
                    </div>
                    <div className="count-content">
                      <h2>
                        <span className="count">
                          <CountUp end={val.count} />
                        </span>
                        <span>+</span>
                      </h2>
                      <p>{val.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>{" "}

            <div className="col">
              <div className="instructor-content">
                <span className="subtitle">{subTitle}</span>
                <h2 className="title">{title}</h2>
                <p>{desc}</p>
                <Link to="/sign-up" className="lab-btn">{btnText}</Link>
              </div>
          </div>

          <div className="col">
            <div className="instructor-thumb">
                <img src="/src/assets/images/instructor/01.png" alt="" />
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
