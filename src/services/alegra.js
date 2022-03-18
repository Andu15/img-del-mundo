import base64 from 'base-64';

const USERNAME = import.meta.env.VITE_ALEGRA_USERNAME;
const PASSWORD = import.meta.env.VITE_ALEGRA_PASSWORD;

const token = base64.encode(`${USERNAME}:${PASSWORD}`);

const options = {
  headers: {
    "Accept": 'application/json',
    "Content-type": "application/json",
    "Authorization": `Basic ${token}`
  }
}

const baseUrl = "https://api.alegra.com/api/v1/";



export const getSellers = async () => {
  const url = `${baseUrl}sellers/`;
  const response = await fetch(url, {...options, method: "GET"});
  const json = await response.json();
  console.log(json);
}

export const updatePoints = async (idSeller, points) => {
  const url = `${baseUrl}sellers/${idSeller}`;
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
  const url = `${baseUrl}invoices`;
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