import React, { useState, useEffect } from "react";
import Carousel from "../carousel/Carousel";

import Footer from "../../components/footer/Footer";
import Mid from "../../components/mid/Mid";
function Home() {

  return (
    <div className="text-center " id="homeText">
      <Carousel />
      <div>
        <div style={{ backgroundColor: "#0298a3", color: "white" }}>
          <h1>
            <b> Women University of Swabi Complaint Management System</b>
          </h1>
          <p>
            <br />{" "}
            <b>Sign Up Today And You Can Leave Complaints on various issues.</b>{" "}
          </p>
        </div>
      </div>



        <Mid />
         <Footer  />
    </div>
  );
}

export default Home;
