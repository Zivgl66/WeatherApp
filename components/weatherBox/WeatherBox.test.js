// WeatherBox.test.js
import React from "react";
import { render } from "@testing-library/react-native";
import WeatherBox from "./weatherBox.jsx";

// This test checks if the component renders the props correctly
describe("WeatherBox component", () => {
  test("renders weather information correctly", () => {
    const condition = require("../../assets/Animations/Animation - 1701969736685.json");
    const day = "Monday";
    const degree = 25;

    const { getByText } = render(
      <WeatherBox condition={condition} day={day} degree={degree} />
    );

    expect(getByText(day)).toBeTruthy();
    expect(getByText(`${degree}°`)).toBeTruthy();
  });
});
