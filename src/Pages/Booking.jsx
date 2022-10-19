import React from "react";
import "../styles/booking.css";
import carData from "../assets/Dummydata/booking-car"
import Caritems from "../Component/UI/Caritems";
import Sidebar from "../Component/Sidebar/Sidebar";
import TopNav from "../Component/Topnav/Topnav";

const Booking = () => {
  return (
<>
<div>



    <div className="booking">
      <div className="booking__wrapper">
        <h2 className="booking__title">Booking</h2>
        <div className="filter__widget-wrapper">
          <div className="filter__widget-01">
            <select name="" id="">
              <option value="NEW">NEW</option>
              <option value="POPULAR">POPULAR</option>
              <option value="UPCOMING">UPCOMING</option>
            </select>
          </div>
          <div className="filter__widget-02">
            <select name="" id="">
              <option value="TOYOTA">TOYOTA</option>
              <option value="BMW">BMW</option>
              <option value="AUDI">AUDI</option>
            </select>
          </div>
        </div>
       
       <div className="booking__car-list">
        
       {
        carData.map((item)=>

        <Caritems item={item} key={item.id}/>)
       
       }
      
    </div>
       </div>
<TopNav/>
</div>
<div>
<Sidebar/>
</div>
      </div>
  </>
  );
};

export default Booking;
