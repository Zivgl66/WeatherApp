import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "./welcome.style";
import { icons } from "../../../constants";

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Weather App</Text>
        <Text style={styles.welcomeMessage}>
          check out the weather around the world!
        </Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(text) => setSearchTerm(text)}
            placeholder="Search by a City"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;
