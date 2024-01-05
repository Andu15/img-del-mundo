export const fillImages = (state, imagesAction) => {
  state.images = imagesAction;
}

export const fillSellers = (state, sellersAction) => {
  state.sellers = sellersAction;
}

export const fillInfo = (state, { sellerId, imageId, imageLike}) => {
  const existingSellerIndex = state.sellersInfo.findIndex((seller) => seller.sellerId === sellerId)

  const infoAction = {}

  if (existingSellerIndex !== -1) {
    const seller = state.sellersInfo[existingSellerIndex]
    infoAction.sellerId = sellerId
    infoAction.arraySellerImages = [...seller.arraySellerImages, imageId]
    infoAction.score = seller.score + imageLike
    state.sellersInfo[existingSellerIndex] = infoAction;
    console.log("Vendedor encontrado, información actualizada");
  } else {
    infoAction.sellerId = sellerId
    infoAction.arraySellerImages = [imageId]
    infoAction.score = imageLike
    state.sellersInfo.push(infoAction);
    console.log("Nuevo vendedor agregado");
  }
}