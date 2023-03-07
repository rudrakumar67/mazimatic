import { React, Component } from "react";
import { Helmet } from "react-helmet";
import HomeFooterTags from "../components/HomeFooterTags";
import HomeHeaderTags from "../components/HomeHeaderTags";
import HomeNavBar from "../components/HomeNavBar";
export default class Home extends Component {
  render() {
    return (
      <>
        <HomeHeaderTags />
        <section
          id="toolBox"
          style={{ fontFamily: '"Alumni Sans", sans-serif', paddingBottom: 40 }}
        >
          <HomeNavBar />
          <div className="container-fluid" id="home">
            <div className="row">
              <div className="col-lg-6">
                <div className="start_left">
                  <h1 className="big_text">
                    BIGGEST PRESALE <br />
                    OF 2023{" "}
                  </h1>
                  <div className="btn_box">
                    <a
                      href="https://mazimatic.com/files/whitepaper.pdf"
                      className="btn btn_link"
                    >
                      WhitePaper
                    </a>
                    <br />
                    <a
                      href="https://mazimatic.com/files/Mazi_Tokenomics.pdf"
                      className="btn btn_link"
                    >
                      Tokenomics
                    </a>
                    <br />
                    <a
                      href="https://mazimatic.com/files/Roadmap.pdf"
                      className="btn btn_link"
                    >
                      Road Map
                    </a>
                    <br />
                  </div>
                </div>
              </div>
              <div className="col-lg-2" />
              <div className="col-lg-4">
                <div id="enter_password_form" className="cards">
                  <div className="card-title pt-3">
                    <h3>Pre-Sale Price</h3>
                    <h1 className="price-rate">
                      ${" "}
                      <span id="enter_password_form_token_rate_lbl">
                        0.0035
                      </span>
                    </h1>
                  </div>
                  <div className="card-middle-title">
                    <h1 className="card-sign-up">LOG IN</h1>
                    <h2 className="card-middles-texts text-center">
                      <span id="nft_cart_login_lbl">Enter Your Password</span>
                    </h2>
                    <div className="email-enter">
                      <label
                        htmlFor="exampleFormControlInput1"
                        className="form-label"
                      />
                      <input
                        name="passwordtxt"
                        type="password"
                        id="passwordtxt"
                        className="form-control"
                        placeholder="********"
                      />
                    </div>
                    <div className="forget" style={{ textAlign: "right" }}>
                      <input
                        type="submit"
                        name="forget_password_btn"
                        id="forget_password_btn"
                        className="btn btn-link btn-sm"
                        style={{
                          color: "rgb(255, 255, 255)",
                          fontSize: 18,
                          textDecoration: "none",
                        }}
                      />
                    </div>
                    <div className="submit-button pb-5">
                      <button
                        id="loginwithpass_btn"
                        type="button"
                        className="btn two"
                      >
                        <span>Login</span>
                      </button>
                    </div>
                    <div className="card-bottom-text">
                      <p className="hr-lines">Payment Partners</p>
                    </div>
                    <div className="content-cards d-flex justify-content-around">
                      <div className="coin-img" />
                      <div className="payme-img" />
                      <div className="upi-img" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <HomeFooterTags />
      </>
    );
  }
}
