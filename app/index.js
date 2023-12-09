import React, { useState, useEffect } from "react";
import { Stack, useRouter } from "expo-router";
import { View, ScrollView, SafeAreaView, Text } from "react-native";
import LottieView from "lottie-react-native";

import { COLORS, icons, SIZES } from "../constants";
import { ScreenHeaderBtn, Welcome } from "../components";
import { storeData } from "../utils";
import DegreeSwitch from "../components/degreeSwitch/DegreeSwitch";

const Home = () => {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    storeData(true);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn iconUrl={icons.weather} dimension="60%" />
          ),
          headerRight: () => <DegreeSwitch />,
          headerTitle: "",
        }}
      />
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View
          style={{
            flex: 1,
            padding: SIZES.medium,
          }}
        >
          <Welcome
            searchTerm={searchTerm}
            setSearchTerm={setSearchTerm}
            handleClick={() => {
              if (searchTerm) {
                setSearchTerm("");
                router.push(`/search/${searchTerm}`);
              }
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            display: "flex",
            width: 500,
            height: 500,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <LottieView
            style={{ flex: 1, marginRight: 50 }}
            source={require("../assets/Animations/Animation - 1702113348804.json")}
            autoPlay
            loop
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
