// https://rickandmortyapi.com/api/character


// async function newFn( ){

// }

const fetchData = async() => {
  const response = await fetch('https://rickandmortyapi.com/api/character')
  const json = await response.json()
  console.log(json)
}

fetchData()