import React from "react";
import styles from "./weatherBox.style";
import { View, Text, Image } from "react-native";
import LottieView from "lottie-react-native";

export default function WeatherBox({ condition, day, degree }) {
  return (
    <View style={styles.container}>
      <LottieView
        style={{ flex: 1, marginBottom: 20 }}
        source={condition}
        autoPlay
        loop
      />
      <View style={styles.smallContainer}>
        <Text style={styles.text}>{day}</Text>
        <Text style={styles.degree}> {degree}&#176;</Text>
      </View>
    </View>
  );
}
