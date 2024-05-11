const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      planets: [],
      characters: [],
      DetailCharacter:{},
    },
    actions: {
      getPlanets: async () => {
        try {
          const response = await fetch("https://swapi.dev/api/planets");
          const data = await response.json();
          console.log(data);
          setStore({ planets: data.results });
        } catch (error) {
          console.error("Error fetching planets:", error);
        }
      },
      getCharacters: async () => {
        try {
          const response = await fetch("https://swapi.dev/api/people/");
          const data = await response.json();
          console.log(data);
          setStore({ characters: data.results });
        } catch (error) {
          console.error("Error fetching characters:", error);
        }
      },
      getDetailCharacters: async (id) => {
        try {
          const response = await fetch(`https://swapi.dev/api/people/${id}`);
          const data = await response.json();
          console.log(data);
          setStore({ DetailCharacter: data});
        } catch (error) {
          console.error("Error fetching characters:", error);
        }
      },

    },
  };
};

export default getState;
