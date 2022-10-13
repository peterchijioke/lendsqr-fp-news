/**
 * @format
 */

import "react-native";
import React from "react";
import App from "../App";

import { render, screen, fireEvent } from "@testing-library/react-native";

it("renders correctly", () => {
  render.caller(<App />);
});
