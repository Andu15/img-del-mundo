import { createStore } from "vuex"

export default createStore({
  state: {
    tagWord: ""
  },
  mutations: {
    setQuery(state, tagWordAccion){
			state.tagWord = tagWordAccion
		}
  },
  actions: {
    getAllSellers: async function () {
      const data = await fetch('https://api.alegra.com/api/v1/sellers/');
      const sellers = await data.json();
      console.log(sellers)
    }


  },
  modules: {
  }
})
