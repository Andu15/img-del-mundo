const baseUrl = "https://jsonplaceholder.typicode.com/";

export const fetchSellers = async () => {
  const url = `${baseUrl}users`;
  try {
    const response = await fetch(url);
    const json = await response.json();
    return json;
  } catch (error) {
    throw new Error(error.message)
  }
}