import React from 'react';

const PokemonCard = ({ pokemon }) => {
  return (
    <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '15px', textAlign: 'center', backgroundColor: '#f9f9f9' }}>
      <img src={pokemon.imageUrl} alt={pokemon.name} style={{ maxWidth: '100px', height: 'auto' }} />
      <h3>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</h3>
      <p>ID: {pokemon.id}</p>
    </div>
  );
};

export default PokemonCard;