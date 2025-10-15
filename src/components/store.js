



allPlanets: [],
singlePlanet: [],
allVehicle: [],
singleVehicle: [],
favorites: []
  }
}

export default function storeReducer(store, action = {}) {
    switch(action.type){
        case `fetchedAllPeople`:
 {
        const peopleArray = action.payload;
        return {
            ...store,
            allPeople: [...peopleArray],

        }           
    }
    case 'fetchedAllPlanets':
        {
            break;
        }
        case 'fetchedAllVehicles':
        {
            break;
        }
        case 'favedProfile':
        {
          const { uid, name } = action.payload;

          if (!store.favorites.some(profile => profile.uid === uid && profile.name === name)) {
             return {
                  ...store,
                 favorites: [...store.favorites, {uid, name: name}]
                }
            }
              return {
                  ...store,
              }
            }
          
        default:
           throw Error('Unknown action.');
  }
}



