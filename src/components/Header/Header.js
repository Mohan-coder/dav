import React from "react";
import Logo_img from "../../images/logo.png";
import { Link } from "react-router-dom";
import '../../styles/style2.css'
const Header = () => {
  return (
    <header className="site-navbar" role="banner">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-11 col-xl-4">
            <h1 className="mb-0 site-logo">
              <Link to={'/'} className="text-white mb-0">
                <img src={Logo_img} className="img-fluid" width="80%" />
              </Link>
            </h1>
          </div>
          <div className="col-12 col-md-8 d-none d-xl-block">
            <nav
              className="site-navigation position-relative text-right"
              role="navigation"
            >
              <ul className="site-menu js-clone-nav mr-auto d-none d-lg-block">
                <li className="active">
                  <Link  to='/' >
                    <span>Home</span>
                  </Link>
                </li>
                <li className="active">
                  <Link  to='/terms' rel='noopener noreferrer'>
                    <span>Terms &amp; Condition</span>
                  </Link>
                </li>
                <li className="active">
                  <Link  to='/privacy' rel='noopener noreferrer'> 
                    <span>Privacy Policy</span>
                  </Link>
                </li>
                <li>
                  <Link to="/contact"  rel='noopener noreferrer'>
                    <span>Contact</span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div
            className="d-inline-block d-xl-none ml-md-0 mr-auto py-3"
            style={{ position: "relative", top: "3px" }}>
            <Link
              to={"#"}
              className="site-menu-toggle js-menu-toggle text-white">
              <span className="icon-menu h3"></span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
