export const getMovies = async () => {
    const response = await  fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=4fa4dc0ab858752c9e3d2d19b0b07fac&language=en-US&include_adult=false&page=1`
    )
    return response.json()
  };