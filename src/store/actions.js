import { imageSearch } from "../services/pexels";
import { fetchSellers } from "../services/jsonPlaceholder";
import { 
  getSellers, 
  getSellerById, 
  createBillingNumber 
} from "../services/alegra";

export const getImages = async ({ commit }, {searchWord, quantity}) => {
  const result = await imageSearch(searchWord, quantity);
  commit("fillImages", result);
};

// export const getAllSellers = async ({commit}) => {
//   const result = await fetchSellers();
//   commit("fillSellers", result);
// };

export const getAlegraSellers = async ({commit}) => {
  const response = await getSellers();
  const activeSellers = response.filter((seller) => seller.status === 'active');
  commit("fillSellers", activeSellers);
}

export const getAlegraSellerByID = async ({commit}, id) => {
  const response = await getSellerById(id);
  return response;
}

// export const updateInfo = ({commit}, seller) => {
//   commit("fillInfo", seller);
// }

export const createInvoiceNumber = async ({commit}) => {
  const response = await createBillingNumber();
  return response;
}