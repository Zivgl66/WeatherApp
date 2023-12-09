import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./weatherIcon.style";

export default function WeatherIcon({ image, text, degree }) {
  return (
    <View style={styles.imageContainer}>
      <Image source={image} style={styles.image} />
      <Text style={styles.text}>
        {text}
        {degree}
      </Text>
    </View>
  );
}
