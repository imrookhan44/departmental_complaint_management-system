import React, { useState, useEffect } from "react";
import Carousel from "../carousel/Carousel";
import Footer from "../../components/footer/Footer";
import Mid from "../../components/mid/Mid";
function Home() {
  return (
    <div className="text-center " id="homeText">
      <Carousel />
      <div>
        <div style={{ backgroundColor: "#192F59", color: "white", padding: "10px" }}>
          {/* <h1>
            <b> University of Swabi Complaint Management System</b>
          </h1> */}
          <p>
            {" "}
            <b>Sign Up Today And You Can Leave Complaints on various issues.</b>{" "}
          </p>
        </div>
      </div>

      <Mid />
      <Footer />
    </div>
  );
}

export default Home;
