import { API_KEY } from "@env";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";

// sort an array alphabetically
export const sortArray = (array, boolean) => {
  if (!boolean)
    return array.sort((a, b) =>
      a.name.toLowerCase().localeCompare(b.name.toLowerCase())
    );
  else
    return array.sort((a, b) =>
      b.name.toLowerCase().localeCompare(a.name.toLowerCase())
    );
};

//Storage:
export const storeData = async (data) => {
  try {
    // console.log("set: ", data);
    const jsonValue = JSON.stringify(data);
    await AsyncStorage.setItem("@degree", jsonValue);
  } catch (e) {
    console.error("Error", e);
  }
};

export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("@degree");
    // console.log("get: ", JSON.parse(jsonValue));
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error("Error", e);
  }
};

//get a city object from the weather api
export const getCityLatandLon = async (city) => {
  try {
    const options = {
      method: "GET",
      url: `https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${city}`,
    };
    const response = await axios.request(options);
    if (response.data.length > 0) {
      console.log(response.data[0]);
      return response.data[0];
    } else {
      return -1;
    }
  } catch (error) {
    console.log(error);
  }
};

// get distance between two points using longitude and latitude
export const distanceCalculator = (point, point2) => {
  console.log(point.lon);
  console.log(point2.lat);
  if (point.lat == point2.lat && point.lon == point2.lon) {
    return 0;
  } else {
    let radlat1 = (Math.PI * point.lat) / 180;
    let radlat2 = (Math.PI * point2.lat) / 180;
    let theta = point.lon - point2.lon;
    let radtheta = (Math.PI * theta) / 180;
    let dist =
      Math.sin(radlat1) * Math.sin(radlat2) +
      Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
    if (dist > 1) {
      dist = 1;
    }
    dist = Math.acos(dist);
    dist = (dist * 180) / Math.PI;
    dist = dist * 60 * 1.1515;
    console.log("name: " + point.country + " " + point.name);
    console.log("distance " + dist * 1.609344 + "km");
    return dist * 1.609344;
  }
};

export const compareCitiesDistance = async (array, city) => {
  let cityFound = await getCityLatandLon(city);
  if (cityFound != -1) {
    return array.sort(
      (a, b) =>
        distanceCalculator(a, cityFound) - distanceCalculator(b, cityFound)
    );
  } else return -1;
};
