const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      planets: [],
      characters: [],
      DetailCharacter: {},
      favorites: [{ name: "Jose Antonio" },],
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

      favorites: (Item) => {
        console.log("Favorites flux esta funcionando");
        let store = getStore();
        setStore({ ...store, favorites: [...store.favorites, Item] });
      },
    },
  };
};

export default getState;
