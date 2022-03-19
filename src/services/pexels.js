const API_KEY_PEXELS = import.meta.env.VITE_API_KEY_PEXELS;

export const imageSearch = async (queryWord, amount) => {

  const baseUrl = "https://api.pexels.com/v1/";
  const url = `${baseUrl}search?query=${queryWord}&per_page=${amount}`;

  const options = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      Authorization: API_KEY_PEXELS
    }
  }

  try {
    const response = await fetch(url, options);
    const json = await response.json();
    // console.log(json.photos)
    return json.photos;
  } catch (error) {
    console.log(error.message)
  }
};
