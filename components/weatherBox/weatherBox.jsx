import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./weatherBox.style";

export default function WeatherBox({ day, degree }) {
  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/heavyrain.png")}
        style={styles.image}
      />
      <Text style={styles.text}>{day}</Text>
      <Text style={styles.degree}> {degree}&#176;</Text>
    </View>
  );
}
