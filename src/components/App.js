import React, { useState } from "react";

import Filters from "./Filters";
import PetBrowser from "./PetBrowser";

function App() {
  const [pets, setPets] = useState([]);
  const [filters, setFilters] = useState({ type: "all" });

  function handleChange(event) {
    const newType = {type: event.target.value}
    setFilters(newType)
  }

  function handleClick() {
    const filter = filters.type === 'all' ? '/' : `?type=${filters.type}`
    fetch(`http://localhost:3001/pets${filter}`)
    .then(r => r.json())
    .then(data => setPets(data))
  }

  function handleAdopt(id) {
    const petAdopt = pets.map(pet => {
      return pet.id === id ? {...pet, isAdopted: true} : pet
    })
    setPets(petAdopt)
  }

  return (
    <div className="ui container">
      <header>
        <h1 className="ui dividing header">React Animal Shelter</h1>
      </header>
      <div className="ui container">
        <div className="ui grid">
          <div className="four wide column">
            <Filters
              onFindPetsClick={handleClick}
              onChangeType={handleChange}
            />
          </div>
          <div className="twelve wide column">
            <PetBrowser onAdoptPet={handleAdopt} pets={pets} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
