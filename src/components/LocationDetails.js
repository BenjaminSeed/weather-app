/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable prettier/prettier */
import React from "react";
import PropTypes from 'prop-types';

function LocationDetails(props) {
    const { city, country } = props;
    return <h1>{`${city}, ${country}`}</h1>
};

export default LocationDetails;

LocationDetails.propTypes = {
    city: PropTypes.string.isRequired,
    country: PropTypes.string.isRequired,
};
