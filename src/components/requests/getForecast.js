import axios from "axios";

const getForecast = (
  searchText,
  setForecasts,
  setLocation,
  setSelectedDate,
  setErrorMessage
) => {
  let endpoint = "https://cmd-shift-weather-app.onrender.com/forecast";

  if (searchText) {
    endpoint += `?city=${searchText}`;
  }

  return axios
    .get(endpoint)
    .then((response) => {
      setSelectedDate(response.data.forecasts[0].date);
      setForecasts(response.data.forecasts);
      setLocation(response.data.location);
      setErrorMessage("");
    })
    .catch((error) => {
      const { status } = error.response;
      if (status === 404) {
        setErrorMessage("No such town or city, try again!!!");
        console.error("Location is not valid", error);
      }
      if (status === 500) {
        setErrorMessage("Oh No! Server Error! Try again later.");
        console.error("server error", error);
      }
    });
};

export default getForecast;
