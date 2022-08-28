import React from "react";

function Footer() {
  return (
    <div>
      <div className="container-fluid" style={{backgroundColor: "#0298a3"}}  >
        <footer className="py-3">
          <ul className="nav justify-content-center pb-3 mb-3">
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-light">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-light">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-light">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-light">
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link px-2 text-light">
                About
              </a>
            </li>
          </ul>
          <p className="text-center text-light">
            <a
              className="text-light"
              href="https://imrankhan44-portfolio.netlify.app/"
              target="blank"
            >
              {" "}
              © 2022 |  WUSCMS
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default Footer;
