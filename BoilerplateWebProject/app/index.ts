import * as React from "react";
import {render} from "react-dom";
import {SuccessButton} from "./components/Button";

console.log("Hello World!");
render(React.createElement(SuccessButton, {text: "This is a button"}), document.body);
