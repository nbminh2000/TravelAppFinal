
import { places, cities} from './dataArrays';


//===================================================================================================================================================================================
 
export function getCityById(cityId) {
  let city;
  cities.map(data => {
    if (data.id == cityId) {
      city = data;
    }
  });
  return city;
}


export function getCityName(cityId) {
  let name;
  cities.map(data => {
    if (data.id == cityId) {
      name = data.name;
    }
  });
  return name;
}

export function getPlaces(cityId) {
  const placesArray = [];
  places.map(data => {
    if (data.cityId == cityId) {
      placesArray.push(data);
    }
  });
  return placesArray;
}



export function getNumberOfPlaces(cityId) {
  let count = 0;
  places.map(data => {
    if (data.cityId == cityId) {
      count++;
    }
  });
  return count;
}


export function getPlacesByCityName(cityName) {
  const nameUpper = cityName.toUpperCase();
  const placesArray = [];
  cities.map(data => {
    if (data.name.toUpperCase().includes(nameUpper)) {
      const places = getPlaces(data.id); // return a vector of places
      places.map(item => {
        placesArray.push(item);
      });
    }
  });
  return placesArray;
}

export function getPlacesByPlaceName(placeName) {
  const nameUpper = placeName.toUpperCase();
  const placesArray = [];
  places.map(data => {
    if (data.title.toUpperCase().includes(nameUpper)) {
      placesArray.push(data);
    }
  });
  return placesArray;
}
