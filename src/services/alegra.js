import { Base64 } from 'js-base64';

const username = import.meta.env.VITE_ALEGRA_USERNAME;
const password = import.meta.env.VITE_ALEGRA_PASSWORD;

const token = Base64.encode(`${username}:${password}`);

const headers = {
    "Accept": 'application/json',
    "Content-type": "application/json",
    "Authorization": `Basic ${token}`
}

const baseUrl = "https://api.alegra.com/api/v1";

export const getSellers = async () => {
  try {
    const url = `${baseUrl}/sellers/`;
    const response = await fetch(url, {
      method: 'GET',
      headers
    })
    const json = await response.json();
    return json;
  } catch (error) {
    throw Error(error.message)
  }
}

export const updatePoints = async (idSeller, points) => {
  const url = `${baseUrl}/sellers/${idSeller}`;
  const response = await fetch(url, {
    ...options,
    method: "PUT", 
    body: JSON.stringify({
      observations: points
    })
  });
  const json = await response.json();
  console.log(json);
}

export const generateInvoice = async (currentDate, expirationDate, idClient, idProduct, salePrice, description, amount) => {
  const url = `${baseUrl}/invoices`;
  const response = await fetch(url, {
    ...options,
    method: "POST", 
    body: JSON.stringify({
      date: currentDate,
      dueDate: expirationDate,
      client: idClient,
      items: [{
        id: idProduct,
        price: salePrice,
        description: description,
        quantity: amount
      }]
    })
  });
  const json = await response.json();
  console.log(json);
}