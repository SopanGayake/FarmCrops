import React, { useState } from 'react';
import PropTypes from 'prop-types';
import VerticalPanel from './Vertical_Panel';
import About from './About';

export default function Navbar(props) {
  const [isPanelOpen, setIsPanelOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);

  const togglePanel = () => {
    setIsPanelOpen(!isPanelOpen);
  };

  const toggleAboutPopup = () => {
    setIsAboutOpen(!isAboutOpen);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg custom-navbar fixed-top">
        <div className="container-fluid custom-container">
          <img
            src="/options_button.jpg"
            alt="Option Button"
            className="option-button"
            onMouseEnter={(e) => (e.target.style.transform = 'scale(1.1)')}
            onMouseLeave={(e) => (e.target.style.transform = 'scale(1.0)')}
            onClick={togglePanel}
          />
          <a className="navbar-brand custom-brand" href="/">
            <img
              src="/FARM_CROPS9.png"
              alt="FarmCrops Logo"
              className="farm-logo rounded-circle"
              onMouseEnter={(e) => (e.target.style.transform = 'scale(1.1)')}
              onMouseLeave={(e) => (e.target.style.transform = 'scale(1.0)')}
            />
          </a>
          <div className="collapse navbar-collapse right-navbar-options">
            <ul className="navbar-nav custom-nav">
              <li className="nav-item">
                <a
                  className="nav-link active custom-link"
                  aria-current="page"
                  href="/"
                  onMouseEnter={(e) => (e.target.style.transform = 'scale(1.1)')}
                  onMouseLeave={(e) => (e.target.style.transform = 'scale(1.0)')}
                >
                  <b style={{ color: '#ba6e27' }}>{props.dashboardText}</b>
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleAboutPopup();
                  }}
                >
                  {props.aboutText}
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  {props.dropdownText || "Dropdown"}
                </a>
                <ul className="dropdown-menu">
                  <li><a className="dropdown-item" href="/">Your Location</a></li>
                  <li><hr className="dropdown-divider" /></li>
                  <li><a className="dropdown-item" href="/">Pune</a></li>
                  <li><a className="dropdown-item" href="/">Mumbai</a></li>
                  <li><a className="dropdown-item" href="/">Nashik</a></li>
                  <li><a className="dropdown-item" href="/">Nagpur</a></li>
                </ul>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="/" tabIndex="-1" aria-disabled="true">{props.CartText}</a>
              </li>
            </ul>
          </div>

          <div className="collapse navbar-collapse left-navbar-options">
            <ul className="navbar-nav">
              <li className="nav-item">
                <form className="d-flex" role="search">
                  <input className="form-control me-2 custom-search-input" type="search" placeholder="Search" aria-label="Search" />
                  <img
                    src="/Search_icon2.png"
                    alt="Search Icon"
                    className="search-icon"
                    onMouseEnter={(e) => (e.target.style.transform = 'scale(1.1)')}
                    onMouseLeave={(e) => (e.target.style.transform = 'scale(1.0)')}
                    onClick={() => console.log('Search icon clicked')}
                  />
                </form>
              </li>
              <li className="nav-item">
                <img
                  src={props.profileImage || "/Profile_icon5.jpg"}
                  alt="Profile"
                  className="profile-icon rounded-circle"
                  onMouseEnter={(e) => (e.target.style.transform = 'scale(1.1)')}
                  onMouseLeave={(e) => (e.target.style.transform = 'scale(1.0)')}
                />
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <VerticalPanel isOpen={isPanelOpen} onClose={togglePanel} />

      {isAboutOpen && (
        <div className="about-popup">
          <button className="close-button" onClick={toggleAboutPopup}>
            &times;
          </button>
          <About />
        </div>
      )}
      {isAboutOpen && <div className="overlay" onClick={toggleAboutPopup} />}
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string,
  aboutText: PropTypes.string,
  dropdownText: PropTypes.string,
  dashboardText: PropTypes.string,
  CartText: PropTypes.string,
  profileImage: PropTypes.string,
};

Navbar.defaultProps = {
  title: "Your Title",
  aboutText: "About us",
  dropdownText: "Location",
  dashboardText: "Dashboard",
  CartText: "Your order",
};