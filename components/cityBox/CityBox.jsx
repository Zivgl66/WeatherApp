import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ActivityIndicator,
  ImageBackground,
} from "react-native";
import styles from "./cityBox.style";
import axios from "axios";
import { COLORS } from "../../constants";
import { PEXEL_API_KEY } from "@env";

export default function CityBox({ location, handleNavigate }) {
  const [image, setimage] = useState({
    uri:
      "https://erepublic.brightspotcdn.com/dims4/default/46b7dd1/2147483647/strip/true/crop/1000x521+0+71/resize/840x438!/format/webp/quality/90/?url=http%3A%2F%2Ferepublic-brightspot.s3.us-west-2.amazonaws.com%2Fb5%2F48%2F0fd02b1c4df7acadea1470bd37c8%2Fshutterstock-84639565.jpg",
  });

  const [searchLoader, setSearchLoader] = useState(false);
  const [searchError, setSearchError] = useState(null);

  const handleSearch = async () => {
    setSearchLoader(true);
    setimage([]);

    try {
      const options = {
        method: "GET",
        url: `https://api.pexels.com/v1/search?query=${location.name}`,
        headers: {
          Authorization: PEXEL_API_KEY,
        },
      };

      const response = await axios.request(options);
      if (response.data.photos.length > 0)
        setimage({
          uri: response.data.photos[0].src.original,
        });
      else
        setimage({
          uri:
            "https://erepublic.brightspotcdn.com/dims4/default/46b7dd1/2147483647/strip/true/crop/1000x521+0+71/resize/840x438!/format/webp/quality/90/?url=http%3A%2F%2Ferepublic-brightspot.s3.us-west-2.amazonaws.com%2Fb5%2F48%2F0fd02b1c4df7acadea1470bd37c8%2Fshutterstock-84639565.jpg",
        });
    } catch (error) {
      setSearchError(error);
      console.log(error);
    } finally {
      setTimeout(() => {
        setSearchLoader(false);
      }, 1000);
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <>
      {searchLoader ? (
        <ActivityIndicator size="large" color={COLORS.primary} />
      ) : (
        <TouchableOpacity style={styles.container} onPress={handleNavigate}>
          <ImageBackground
            source={image}
            resizeMode="cover"
            style={styles.image}
          >
            <View style={{ backgroundColor: "rgba(0,0,0,0.4)" }}>
              <View style={styles.smallcontainer}>
                <Text style={styles.text}>{location.name}</Text>
                <Text style={styles.smallText}>{location.country}</Text>
              </View>
              <View style={styles.smallcontainer}>
                <Text style={styles.smallText}>
                  The lat is {location.lat}, located in the {location.region}{" "}
                  region.{" "}
                </Text>
              </View>
            </View>
          </ImageBackground>
        </TouchableOpacity>
      )}
    </>
  );
}
