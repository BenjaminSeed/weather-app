/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from "react";
import { render } from "@testing-library/react";
import '@testing-library/jest-dom'
import ForecastSummary from "../../components/ForecastSummary";

describe("ForecastSummary", () => {
    const validProps = {
        date: 1111111,
        description: "stub description",
        icon: "stub icon",
        temperature: {
            min: 12,
            max: 22,
        },
    };

    it("renders correctly", () => {
        const { asFragment } = render(
            <ForecastSummary
            date={validProps.date}
            description={validProps.description}
            icon={validProps.icon}
            temperature={validProps.temperature}
            />
        );
    });

    it("renders correct values for props", () => {
        const { getByText, getByTestId } =render(
            <ForecastSummary
            date={validProps.date}
            description={validProps.description}
            icon={validProps.icon}
            temperature={validProps.temperature}
            />
        );

        expect(getByText("1111111")).toHaveClass("forecast-summary__date");
        expect(getByText("stub description")).toHaveClass("forecast-summary__description");
        expect(getByText("stub icon")).toHaveClass("forecast-summary__icon");
        expect(getByText("22")).toHaveClass("forecast-summary__temperature");
    });
});