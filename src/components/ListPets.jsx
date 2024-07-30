import React from "react";
import { useState, useEffect } from "react";
import MediaCard from "./MediaCard.jsx";
import SearchForm from "./SearchForm.jsx";
import ErrorHandler from "./ErrorHandler.jsx";
const ListPets = () => {
  const [pets, setPets] = useState([]);
  const [error, setError] = useState(null);
  const [searchCriteria, setSearchCriteria] = useState({
    animalType: '',
    city: '',
    state: '',
    breed: '',
  });
  useEffect(() => {
    const fetchpets = () => {
      fetch("http://pets-v2.dev-apis.com/pets")
        .then((res) => res.json())
        .then((data) => setPets(data.pets))
        .catch((error) => setError(error));
    };
    fetchpets();
  }, []);
 const handleSearch = (searchCriteria) => {
    setSearchCriteria(searchCriteria); 
  };
  const filteredPets = pets.filter((pet) => {
    const { animalType, city, state, breed } = searchCriteria;
    return (
      (!animalType || pet.animal === animalType) &&
      (!city || pet.city.toLowerCase().includes(city)) &&
      (!state || pet.state === state) &&
      (!breed || pet.breed.toLowerCase().includes(breed))
    );
  });

  
  return (
    <>
      <h1>Search for Pets</h1>
      {error && <ErrorHandler error={error} />}
      <SearchForm onSearch={handleSearch} />
      <div className="cat-items">
        {filteredPets.map((item) => {
          return (
            <div key={item.id}>
              <MediaCard data={item} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default ListPets;
