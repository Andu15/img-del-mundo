import { imageSearch } from "../services/pexels";
import { fetchSellers } from "../services/jsonPlaceholder";

export const getImages = async ({ commit }, {searchWord, quantity}) => {
  const result = await imageSearch(searchWord, quantity);
  commit("fillImages", result);
};

export const getAllSellers = async ({commit}) => {
  const result = await fetchSellers();
  commit("fillSellers", result);
};


export const updateInfo = ({commit}, seller) => {
  commit("fillInfo", seller);
}
