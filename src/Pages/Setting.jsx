import React from "react";
import "../styles/settings.css";
import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TopNav from "../Component/Topnav/Topnav";
import Sidebar from "../Component/Sidebar/Sidebar";

const Settings = () => {
  const [live, setLive] = useState("");
  const [street, setStreet] = useState("");
  const [email, setEmail] = useState("");
  const [num, setNum] = useState("");
  const [dob, setDob] = useState("");
  const [gender, setGender] = useState("");
  const [photo, setphoto] = useState("");

  function notify() {
    toast("your form is submitted");
  }
  function show() {
    toast("please fill the form");
  }
  const handleSubmit = (e) => {
    e.preventDefault();
// console.log("live" , live)
// console.log("street" , street)
// console.log("email" , email)
// console.log("num" , num)
// console.log("dob" , dob)
// console.log("gender" , gender)
// console.log("phto" , photo)
    if (
      live == "" &&
      street == "" &&
      email == "" &&
      num == "" &&
      dob == "" &&
      gender == "" &&
      photo == ""
    ) {
      toast.error(' UNSUCCESSFULL!', {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    } else {
      toast.success(' SUCCESSFULL!', {
        position: "top-left",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
  };
  return (
    <div className="settings">
      <div className="settings__wrapper">
        <h2 className="settings__title">Settings</h2>

        <div className="settings__top">
          <button className="setting__btn">My Details</button>
          <button className="setting__btn active__btn">Profile</button>
          <button className="setting__btn">Password</button>
          <button className="setting__btn">Email</button>
          <button className="setting__btn">Notification</button>
        </div>

        <div className="details__form">
          <h2 className="profile__title">Profile</h2>
          <p className="profile__desc">
            Update your photo and personal details here
          </p>
          <form onSubmit={handleSubmit}>
            <div className="form__group">
              <div>
                <label>Live in</label>
                <input
                  type="text"
                  placeholder="Karachi, Pakistan"
                  value={live}
                  onChange={(e) => setLive(e.target.value)}
                />
              </div>

              <div>
                <label>Street</label>
                <input
                  type="text"
                  placeholder="SYL 3108"
                  value={street}
                  onChange={(e) => setStreet(e.target.value)}
                />
              </div>
            </div>

            <div className="form__group">
              <div>
                <label>Email</label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>

              <div>
                <label>Phone Number</label>
                <input
                  type="number"
                  placeholder="+92**-*******"
                  value={num}
                  onChange={(e) => setNum(e.target.value)}
                />
              </div>
            </div>

            <div className="form__group">
              <div>
                <label>Date of Birth</label>
                <input
                  type="date"
                  placeholder="dd/mm/yyyy"
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                />
              </div>

              <div>
                <label>Gender</label>
                <input
                  type="text"
                  placeholder="Male"
                  value={gender}
                  onChange={(e) => setGender(e.target.value)}
                />
              </div>
            </div>

            <div className="form__group">
              <div>
                <label>Your Photo</label>
                <p className="profile-img__desc">
                  This will be displayed in your profile
                </p>
                <input
                  type="file"
                  placeholder="choose file"
                  value={photo}
                  onChange={(e) => setphoto(e.target.value)}
                />
              </div>

              <div className="profile__img-btns">
                <button className="dlt__btn">Delete</button>
                <button className="update__btn">Update</button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
      <TopNav/>
      <Sidebar/>
    </div>
  );
};

export default Settings;
