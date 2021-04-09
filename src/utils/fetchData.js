async function fetchData(apiURL){
  try {
    const data = await fetch(apiURL)
    return await data.json()

  } catch (e) {
    console.log(e)
    throw Error(`An error has occurred: ${e}`)
  }
}

export default fetchData