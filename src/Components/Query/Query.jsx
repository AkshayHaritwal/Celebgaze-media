import React from "react";
import "./Query.css";

function Query() {
    


  return (
    <div className="query container">
      <div className="query-heading">
        <h3>Frequently asked questions</h3>
        <p>
          
          We are always to help you with your queries. Our customer support is
          availabe for 24/7.
        </p>
      </div>
      <div className="query-container">
        <div className="query-left">
          <div className="query-item">
            <div className="question-title">
              <h3>How can I download the App?</h3>
              <i className="fa-solid fa-angle-up arrowup"></i>
              <i className="fa-solid fa-angle-down"></i>
            </div>
            <p>
              You can download the app from Android play store and Apple Ios
              store. Simply search the app with creator name and download the
              app.
            </p>
          </div>

          <div className="query-item item-bottom">
            <div className="question-title ">
              <h3>How can I upgrade my current plan?</h3>
              <i className="fa-solid fa-angle-up arrowup"></i>
              <i className="fa-solid fa-angle-down"></i>
            </div>
            <p>
              Yes you can upgrade your plans. Go to your profile page and click
              on gold coin it will redirect to payment gateway. You can pay
              using net banking, credit card, debit card, wallet and many more
              ways.
            </p>
          </div>
        </div>
        <div className="query-right">
          <div className="query-item">
            <div className="question-title">
              <h3>Process of booking live video call with celeb</h3>
              <i className="fa-solid fa-angle-up arrowup"></i>
              <i className="fa-solid fa-angle-down"></i>
            </div>
            <p>
              Yes you can. Click on video call button. you have to fill the form
              and pay as per your requirements. you will get a call form celeb
              in next 48 hours.
            </p>
          </div>

          <div className="query-item item-bottom">
            <div className="question-title">
              <h3>Join Live Stream?</h3>
              <i className="fa-solid fa-angle-up arrowup"></i>
              <i className="fa-solid fa-angle-down"></i>
            </div>
            <p>
              When the celeb is live you will see live button will popup like
              ambulance. simply click on live and pay the amount, Hurray you are
              in. Now you can send gift, can chat, and connect on the live with
              the celeb.
            </p>
          </div>
        </div>
      </div>
      <div className="email-us">
        <h3>Can't find an answer? </h3>
        <a href=""> Email us</a>
      </div>
    </div>
  );
}

export default Query;
