const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      planets: [],
      characters: [],
      DetailCharacter: {},
      DetailPlanets: {},
      favorites: [{ name: "Jose Antonio" }],
    },
    actions: {
      getPlanets: async () => {
        try {
          const response = await fetch("https://swapi.dev/api/planets");
          const data = await response.json();
          console.log(data);
          let store = getStore();
          setStore({ ...store, planets: data.results });
        } catch (error) {
          console.error("Error fetching planets:", error);
        }
      },
      getCharacters: async () => {
        try {
          const response = await fetch("https://swapi.dev/api/people/");
          const data = await response.json();
          console.log(data);
          let store = getStore();
          setStore({ ...store, characters: data.results });
        } catch (error) {
          console.error("Error fetching characters:", error);
        }
      },
      getDetailCharacters: async (id) => {
        try {
          const response = await fetch(`https://swapi.dev/api/people/${id}`);
          const data = await response.json();
          console.log(data);
          let store = getStore();
          setStore({ ...store, DetailCharacter: data });
        } catch (error) {
          console.error("Error fetching characters:", error);
        }
      },
      getDetailPlanets: async (id) => {
        try {
          const response = await fetch(`https://swapi.dev/api/planets/${id}`);
          const data = await response.json();
          console.log(data);
          let store = getStore();
          setStore({ ...store, DetailPlanets: data });
        } catch (error) {
          console.error("Error fetching Planets:", error);
        }
      },

      favorites: (Item) => {
        console.log("Favorites flux esta funcionando");
        let store = getStore();
        setStore({ ...store, favorites: [...store.favorites, Item] });
      },

      deleteFavorites: (Item) => {
        const store = getStore();
        const updatedFavorites = store.favorites.filter((fav) => fav !== Item);
        setStore({ favorites: updatedFavorites });
      },
    },
  };
};

export default getState;
