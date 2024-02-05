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

export const getSellerById = async (ID) => {
  try {
    const url = `${baseUrl}/sellers/${ID}`;
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

// export const updatePoints = async (idSeller, points) => {
//   const url = `${baseUrl}/sellers/${idSeller}`;
//   const response = await fetch(url, {
//     ...options,
//     method: "PUT", 
//     body: JSON.stringify({
//       observations: points
//     })
//   });
//   const json = await response.json();
//   console.log(json);
// }

export const createBillingNumber = async () => {
  const url = `${baseUrl}/number-templates `;
  const response = await fetch(url, {
    method: "POST", 
    headers,
    body: JSON.stringify({
      autoincrement: true
    })
  })
  const json = await response.json();
  console.log(json);
}

export const generateInvoice = async (invoiceNumber, arrayItems, termsConditions, dueDate, date, sellerId) => {
  const url = `${baseUrl}/providerId `;
  const response = await fetch(url, {
    method: "POST", 
    headers,
    body: JSON.stringify({
      numberTemplate: {
        id: invoiceNumber
      },
      status: 'open',
      items: arrayItems,
      termsConditions,
      dueDate,
      date,
      seller: sellerId
    })
  });
  const json = await response.json();
  console.log(json);
}