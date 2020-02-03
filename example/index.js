import React from "react";
import ReactDOM from "react-dom";
import slides from "./slides";
import Carousel from "../src/Carousel";

const container = document.createElement("div");
document.body.appendChild(container);
ReactDOM.render(<Carousel slides={slides} />, container);
