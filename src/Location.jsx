import React from "react";
import { Link } from "react-router-dom";

const title = "More Than 60,000 Customers";

const desc =
  "Buy products on any device with our app & enjoy your time doing what you want. Just download, install, and start shopping.";

const clientsList = [
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
  {
    imgUrl: "/src/assets/images/clients/avater.jpg",
    imgAlt: "education thumb rajibraj91 rajibraj",
    text: "Join with Us",
  },
];

const Location = () => {
  return (
    <div className="client-section style-2 padding-tb ">
      <div className="container">
        {" "}
        {/* Fixed typo in 'container' */}
        <div className="section-header text-center">
          <h2 className="title"> {title}</h2>
          <p>{desc}</p>
        </div>
        {/* <div className="section-wrapper">
          <div className="clients">
            {clientsList.map((val, i) => (
              <div key={i} className="client-list">
                <Link to="/sign-up" className="client-content"></Link>
              </div>
            ))}
          </div>
        </div>*/}
      </div>
    </div>
  );
};

export default Location;
