import React from "react";
import { View, TouchableOpacity, Image, TextInput } from "react-native";
import styles from "./search.style";

export default function Search({
  icon,
  placeholder,
  searchTerm,
  setSearchTerm,
  handleClick,
}) {
  return (
    <View style={styles.sortContainer}>
      <View style={styles.searchWrapper}>
        <TextInput
          style={styles.searchInput}
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
          placeholder={placeholder}
        />
      </View>
      <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
        <Image
          source={icon}
          resizeMode="contain"
          style={styles.searchBtnImage}
        />
      </TouchableOpacity>
    </View>
  );
}
