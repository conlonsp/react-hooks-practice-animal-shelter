import React from "react";

function Pet({ pet, onAdoptPet }) {
  function handleClick() {
    onAdoptPet(pet.id)
    console.log(pet)
  }
  return (
    <div className="card" data-testid="pet">
      <div className="content">
        <span className="header">
          {/*'♀' OR '♂' */}
          {pet.gender === 'male' ? '♂' : '♀'}
          {pet.name}
        </span>
        <div className="meta">
          <span className="date">{pet.type}</span>
        </div>
        <div className="description">
          <p>{pet.age}</p>
          <p>{pet.weight}</p>
        </div>
      </div>
      <div className="extra content">
        {pet.isAdopted ? 
          <button className="ui disabled button">Already adopted</button>
          :
          <button className="ui primary button" onClick={handleClick}>Adopt pet</button>
        }
      </div>
    </div>
  );
}

export default Pet;
