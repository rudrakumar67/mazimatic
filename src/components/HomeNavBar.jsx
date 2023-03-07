import { React, Component } from "react";

export default class HomeNavBar extends Component {
  render() {
    return (
      <nav
        className="navbar navbar-expand-lg"
        style={{ backgroundColor: "transparent" }}
      >
        <a className="navbar-brand" href="#">
          <img src="assets/logo/mazimatic_logo_db.png" style={{ width: 175 }} />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fa fa-bars text-white" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav  ml-auto">
            <li className="nav-item active">
              <a className="nav-link" href="#home">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#vision-content">
                Our Vision
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="http://nft.mazimatic.com">
                NFT
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Features">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Contact">
                Contact Us
              </a>
            </li>
            <li id="dash_nav" className="nav-item">
              <a className="nav-link" href="dashboard.html">
                Dashboard
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
