import React from "react";
import grab_img from "./../Img/banner-grap.jpg";

export default function OfferGrap() {
  return (
    <div className="section">
      <div className="container-fluid">
        <div className="card mb-3">
          <div className="row g-0 align-items-center grap-offr">
            <div className="col-md-6">
              <img
                src={grab_img}
                className="img-fluid rounded-start"
                alt="..."
              />
            </div>
            <div className="col-md-6">
              <div className="card-body">
                <h2 className="card-title">Don't miss the offer Grab it now</h2>
                <button className="shop-btn">Shop Now</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
