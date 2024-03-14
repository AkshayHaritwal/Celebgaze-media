import React from "react";
import "./WhyUs.css";
import celebimage from "../../assets/new-img.png";
function WhyUs() {
  return (
    <div className="whyus ">
      <div className="whyus-main">
        <div className="whyus-left">
          <div className="heading">
            <h3>Get Started Now</h3>
            <p>Follow these simple 3 steps to get started.</p>
          </div>


          <div className="why-content">
            <div className="whyus-item">
              <i className="fa-solid fa-check blue"></i>
              <div className="detail">
                <h5>Are you a celebrity?</h5>
                <p>Verify your celebrity status</p>
              </div>
            </div>

            <div className="whyus-item">
              <i className="fa-solid fa-check orange"></i>
              <div className="detail">
                <h5>Choose your</h5>
                <p>Pick features and engagement</p>
              </div>
            </div>
          </div>

          <div className="why-content2" id="whyus">
            <div className="whyus-item">
              <i className="fa-solid fa-check green"></i>
              <div className="detail">
                <h5>Seamless Earning</h5>
                <p>Know your earning potential</p>
              </div>
            </div>

            <div className="whyus-item">
              <i className="fa-solid fa-check violet"></i>
              <div className="detail">
                <h5>Join Us</h5>
                <p>Submit your query. That's It.</p>
              </div>
            </div>
          </div>



          <div className="join-btn">
            <button className="btn">
              Join Now <i className="fa-solid fa-arrow-right"></i>
            </button>
          </div>
        </div>

        <div className="whyus-right">
          <img src={celebimage} alt="image" />
        </div>
      </div>
    </div>
  );
}

export default WhyUs;
