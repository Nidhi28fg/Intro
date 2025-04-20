import { useEffect, useState } from 'react';
import axios from 'axios';

function PokemonList() {
  const [products, error, loading] = customReactQuery('https://pokeapi.co/api/v2/pokemon?limit=20');
  const [searchQuery, setSearchQuery] = useState('');

  //how to create search 

  const filteredProducts = products?.results?.filter(pokemon =>
    pokemon.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );



  const mapProducts = filteredProducts?.map(pokemon => (
    <li key={pokemon.id} style={{ display: 'flex', alignItems: 'center', border: '1px solid #ccc', borderRadius: '5px', padding: '10px', marginBottom: '10px' }}>
      {pokemon.imageUrl && <img src={pokemon.imageUrl} alt={pokemon.name} style={{ width: '50px', height: '50px', marginRight: '10px' }} />}
      {pokemon.imageUrl1 && <img src={pokemon.imageUrl1} alt={pokemon.name} style={{ width: '50px', height: '50px', marginRight: '10px' }} />}
      {pokemon.imageUrl2 && <img src={pokemon.imageUrl1} alt={pokemon.name} style={{ width: '50px', height: '50px', marginRight: '10px' }} />}
      {pokemon.imageUrl3 && <img src={pokemon.imageUrl3} alt={pokemon.name} style={{ width: '50px', height: '50px', marginRight: '10px'}} />}
      <span>{pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}</span>
    </li>
  ));

  if (error) {
    return <h1>Something went wrong</h1>;
  }
  if (loading) {
    return <h1>Loading...</h1>;
  }
  return (
    <>
      <h1>Chai aur API in react</h1>
      <input
        type="text"
        placeholder="Search Pokémon"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        style={{ padding: '8px', marginBottom: '15px', width: '300px' }}
      />
      {products && products.results && (
        <h2>Number of products are : {products.results.length}</h2>
      )}
      <ul>{mapProducts}</ul>
    </>
  );
}

export default PokemonList;

const customReactQuery = (urlPath) => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      
      try {
        setLoading(true);
        setError(false);
        const response = await axios.get(urlPath);
        console.log(response.data);
        //api k andar k or api ho kaise fetch krte hai 
        const pokemonList = response.data.results;
        const detailedPokemon = await Promise.all(
          pokemonList.map(async (pokemon) => {
            const detailsResponse = await axios.get(pokemon.url);
            return {
              ...pokemon,
              imageUrl: detailsResponse.data.sprites.front_default,
              imageUrl1: detailsResponse.data.sprites.front_shiny,
              imageUrl2: detailsResponse.data.sprites.back_shiny,
              imageUrl3: detailsResponse.data.sprites.back_default,
              id: detailsResponse.data.id,
            };
          })
        );
        // api k andar jo results hai usko naam detailedPokemon diya hai
        setProducts({ ...response.data, results: detailedPokemon });
        setLoading(false);
        console.error("API Error:", error);
      } catch (error) {
        setError(true);
        setLoading(false);
        console.error("API Error:", error);
      }
    };

    fetchData();
  }, [urlPath]);

  return [products, error, loading];
};


// import { useEffect, useState } from 'react'
// import axios from 'axios'

// function PokemonList() {
  
//   const [products, error, loading] = customReactQuery('https://pokeapi.co/api/v2/pokemon?limit=20')
//   const [searchQuery, setSearchQuery] = useState('');
//   console.log(products);

//     const handleSearchInputChange = (event) => {
//     setSearchQuery(event.target.value);
//   };

//    // Filter the Pokémon based on the search query
//    const filteredProducts = products?.results?.filter(pokemon =>
//     pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
//   );

//   const mapProducts = products?.results?.map(pokemon =>
//     <li key={pokemon.index}>{pokemon.name}
//     </li>
    
//   );

//   if(error){
//     return <h1>something went wrong</h1>
//   }
//   if(loading){
//     return <h1>loading...</h1>
//   }
//   return (
//     <>
//       <h1>Chai aur API in react</h1>
//       <input
//         type="text"
//         placeholder="Search Pokémon"
//         value={searchQuery}
//         onChange={handleSearchInputChange}
//         style={{ padding: '8px', marginBottom: '15px', width: '300px' }}
//       />
//       {products && products.results && (
//         <h2>Number of products are : {products.results.length}</h2>
//       )}
//       <ul>{mapProducts}</ul>
//     </>
//   )
// }

// export default PokemonList;

// const customReactQuery = (urlPath) => {

//   const [products, setProducts] = useState([])
//   const [error, setError] = useState(false)
//   const [loading, setLoading] = useState(false)

//   useEffect(()=>{
//     (async () => {
//       try {
//         setLoading(true);
//         setError(false);
//         const response = await axios.get(urlPath)
//         console.log(response.data);
//         setProducts(response.data);
//         setLoading(false);
//       } catch (error) {
//         setError(true);
//         setLoading(false);
//         console.error("API Error:", error); 
//       }
//     })()
    
//   },[]) 
//   return [products, error, loading]
// };