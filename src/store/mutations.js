export const fillImages = (state, imagesAction) => {
  state.images = imagesAction;
}

export const fillSellers = (state, sellersAction) => {
  state.sellers = sellersAction;
}

export const fillInfo = (state, infoAction) => {
  state.sellersInfo.push(infoAction);
}