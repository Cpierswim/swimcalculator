import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import axios from "axios";

function fullScreen() {
  console.log("test");
  var elem = document.getElementById("container");
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.webkitRequestFullscreen) {
    /* Safari */
    elem.webkitRequestFullscreen();
  } else if (elem.msRequestFullscreen) {
    /* IE11 */
    elem.msRequestFullscreen();
  }
}

const HomePage = () => {
  return (
    <div className="container">
      <button type="button" onClick={fullScreen} id="fullscreenbutton">
        Cick Me
      </button>
    </div>
  );
};

export default HomePage;
