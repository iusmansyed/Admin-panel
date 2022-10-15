import React from "react";
import "../styles/sellcar.css";
import Sellcar from "../assets/images/sell-car.png";
import TrackingChart from "../charts/TrackingChart";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
const SellCar = () => {
  const percentage = 55;
  const percentage02 = 60;
  return (
    <div className="sell__car">
      <div className="sell__car-wrapper">
        <h2 className="sell__car-title">Sell Car</h2>
        <div className="sell__car-top">
          <div className="sell__car-img">
            <h2>MERCEDES BENZ</h2>
            <img src={Sellcar} alt="" />
          </div>
          <div className="tracking__history">
            <h3>Tacking History</h3>
            <span ><TrackingChart /></span>
          </div>
        </div>
        <div className="offer__wrapper">
          <div className="offer__top">
            <h2 className="sell__car-title">Offer</h2>
            <div className="filter__widget-02">
              <select name="" id="">
                <option value="TOYOTA">TOYOTA</option>
                <option value="BMW">BMW</option>
                <option value="AUDI">AUDI</option>
              </select>
            </div>
          </div>
          <div className="offer__list">
            <div className="offer__item">
              <div className="box__01">
                <h3 className="client__name">Syed Haris Ali</h3>
                <h6 className="avg__price">
                  $100,000 <span>average price</span>
                </h6>
                <h6 className="market__price">Market average is $120,000</h6>
                <span className="arrow__key">
                  <i class="ri-arrow-right-fill"></i>
                </span>
              </div>
              <div className="circle__wrapper">
                <div className="box__02">
                  <CircularProgressbar
                    value={percentage}
                    text={`${percentage}%`}
                    styles={buildStyles({
                      rotation: 0.25,
                      strokeLinecap: "butt",
                      textSize: "16px",
                      pathTransitionDuration: 0.5,
                      pathColor: "#01d293",
                      textColor: "#fff",
                      trailColor: "#0b0c28",
                      backgroundColor: "#01d293",
                      textSize: "18px",
                    })}
                  />
                </div>
                <h4>Impression share</h4>
              </div>
              <div className="box__03">
                <span className="model__spend-icon">
                  <i class="ri-car-line"></i>
                </span>
                <h6 className="spend__amount">$1200</h6>
                <p className="spend__title">Model Spend</p>
              </div>
              <div className="box__04">
                <span className="model__spend-icon">
                <i class="ri-share-forward-line"></i>
                </span>
                <h6 className="spend__amount">$1200</h6>
                <p className="spend__title">Model Spend</p>
              </div>
              <div className="box__05">
                <span className="model__spend-icon">
                <i class="ri-money-dollar-circle-line"></i>
                </span>
                <h6 className="spend__amount">$1000</h6>
                <p className="spend__title">Spend Per Unit Turned</p>
              </div>
            </div>
            <div className="offer__item">
              <div className="box__01">
                <h3 className="client__name">Syed Muhammad Usman</h3>
                <h6 className="avg__price">
                  $200,000 <span>average price</span>
                </h6>
                <h6 className="market__price">Market average is $110,000</h6>
                <span className="arrow__key">
                  <i class="ri-arrow-right-fill"></i>
                </span>
              </div>
              <div className="circle__wrapper">
                <div className="box__02">
                  <CircularProgressbar
                    value={percentage02}
                    text={`${percentage02}%`}
                    styles={buildStyles({
                      rotation: 0.25,
                      strokeLinecap: "butt",
                      textSize: "16px",
                      pathTransitionDuration: 0.5,
                      pathColor: "#01d293",
                      textColor: "#fff",
                      trailColor: "#0b0c28",
                      backgroundColor: "#01d293",
                      textSize: "18px",
                    })}
                  />
                </div>
                <h4>Impression share</h4>
              </div>
              <div className="box__03">
                <span className="model__spend-icon">
                  <i class="ri-car-line"></i>
                </span>
                <h6 className="spend__amount">$1900</h6>
                <p className="spend__title">Model Spend</p>
              </div>
              <div className="box__04">
                <span className="model__spend-icon">
                <i class="ri-share-forward-line"></i>
                </span>
                <h6 className="spend__amount">$1500</h6>
                <p className="spend__title">Model Spend</p>
              </div>
              <div className="box__05">
                <span className="model__spend-icon">
                <i class="ri-money-dollar-circle-line"></i>
                </span>
                <h6 className="spend__amount">$1020</h6>
                <p className="spend__title">Spend Per Unit Turned</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellCar;
