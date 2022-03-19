const baseUrl = "https://jsonplaceholder.typicode.com/";

export const fetchSellers = async () => {
  const url = `${baseUrl}users`;
  try {
    const response = await fetch(url);
    const json = await response.json();
    // console.log(8, json)
    return json;
  } catch (error) {
    console.log(error.message)
  }
}