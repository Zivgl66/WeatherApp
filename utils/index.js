import AsyncStorage from "@react-native-async-storage/async-storage";

// export const checkImageURL = (url) => {
//   if (!url) return false;
//   else {
//     const pattern = new RegExp(
//       "^https?:\\/\\/.+\\.(png|jpg|jpeg|bmp|gif|webp)$",
//       "i"
//     );
//     return pattern.test(url);
//   }
// };

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
    console.log("set: ", data);
    const jsonValue = JSON.stringify(data);
    await AsyncStorage.setItem("@degree", jsonValue);
  } catch (e) {
    console.error("Error", e);
  }
};

export const getData = async () => {
  try {
    const jsonValue = await AsyncStorage.getItem("@degree");
    console.log("get: ", JSON.parse(jsonValue));
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error("Error", e);
  }
};
