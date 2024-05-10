const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {

			planets: []
			


		},
		actions: {
			// Use getActions to call a function within a fuction

			getPlanets:async () => {
				try {
				const response = await fetch("https://swapi.dev/api/planets")
					const data = response.json()
					console.log(data.results)
					setStore({planets:data.results})
				} catch (error) {
				console.log(error)	
				}
			//	
			//	  .then((res) => res.json())
			//	  .then((data) => setStore({planets:data.results}))
			//	  .catch((err) => console.error(err));
			  }
		} 
	};
};

export default getState;
