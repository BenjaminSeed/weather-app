import React from "react";
import { render } from "@testing-library/react";
import ForecastDetails from "../../components/ForecastDetails";

describe("ForecastDetails", () => {
  const validProps = {
    date: 1525046400000,
    humidity: 10,
    wind: {
      speed: 100,
      direction: "South East",
    },
    temperature: {
      max: 11,
      min: 2,
    },
  };

  describe("ForecastDetails-snapshot", () => {
    it("renders props correctly", () => {
      const { asFragment } = render(<ForecastDetails forecast={validProps} />);

      expect(asFragment()).toMatchSnapshot();
    });
  });

  it("renders correct values for props", () => {
    const { getByText } = render(<ForecastDetails forecast={validProps} />);

    expect(getByText("Mon Apr 30 2018")).toHaveAttribute(
      "class",
      "forecast-details__date"
    );
    expect(getByText("Max Temperature: 11°C")).toHaveAttribute(
      "class",
      "forecast-details__maxTemperature"
    );
    expect(getByText("Min Temperature: 2°C")).toHaveAttribute(
      "class",
      "forecast-details__minTemperature"
    );
    expect(getByText("Humidity: 10")).toHaveAttribute(
      "class",
      "forecast-details__humidity"
    );
    expect(getByText("Wind Speed: 100")).toHaveAttribute(
      "class",
      "forecast-details__windSpeed"
    );
    expect(getByText("Wind Direction: South East")).toHaveAttribute(
      "class",
      "forecast-details__windDirection"
    );
  });
});
