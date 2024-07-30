import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import PropTypes from "prop-types";

function SearchForm({ onSearch }) {
  const [searchCriteria, setSearchCriteria] = useState({
    animalType: "",
    city: "",
    state: "",
    breed: "",
  });
  SearchForm.propTypes = {
    onSearch: PropTypes.func.isRequired,
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setSearchCriteria({
      ...searchCriteria,
      [name]: value.toLowerCase(), // Ensure consistent case handling
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSearch(searchCriteria); // Pass search criteria to parent
  };

  return (
    <form onSubmit={handleSubmit} id="search-form">
      <TextField
        id="filled-basic"
        label="animalType"
        variant="filled"
        name="animalType"
        onChange={handleInputChange}
        value={searchCriteria.animalType}
      />
      <TextField
        id="filled-basic"
        label="city"
        variant="filled"
        name="city"
        onChange={handleInputChange}
        value={searchCriteria.city}
      />
      <TextField
        id="filled-basic"
        label="state"
        variant="filled"
        name="state"
        onChange={handleInputChange}
        value={searchCriteria.state}
      />
      <TextField
        id="filled-basic"
        label="breed"
        variant="filled"
        name="breed"
        onChange={handleInputChange}
        value={searchCriteria.breed}
      />
      <Stack spacing={2} direction="row">
        <Button type="submit" variant="contained">
          Search
        </Button>
      </Stack>
    </form>
  );
}

export default SearchForm;
