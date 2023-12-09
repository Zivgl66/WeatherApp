import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
  TextComponent,
} from "react-native";
import { useRouter } from "expo-router";

import styles from "./welcome.style";
import { icons, SIZES } from "../../../constants";

const Welcome = ({ searchTerm, setSearchTerm, handleClick }) => {
  const router = useRouter();
  // const [activeJobType, setActiveJobType] = useState("Full-time");

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
            placeholder="Search by a City or a Country"
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
