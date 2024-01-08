import React from "react";
import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

import axios from "axios";

function fullScreen() {
  console.log("test");
}

const HomePage = () => {
  return (
    <div className="container">
      <button onClick="fullScreen">Click me</button>
    </div>
  );
};

export default HomePage;
