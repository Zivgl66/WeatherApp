import React, { useState, useEffect } from "react";
import { Stack, useRouter } from "expo-router";
import { View, ScrollView, SafeAreaView, Text } from "react-native";
import { COLORS, icons, SIZES } from "../constants";
import { ScreenHeaderBtn, Welcome } from "../components";
import { Switch } from "react-native-switch";
import { storeData } from "../utils";
import DegreeSwitch from "../components/degreeSwitch/DegreeSwitch";

// TODO: 1.when no results pop a message no results!
// TODO: 2. sort by A-Z
// TODO: 3. sort by distance to a place (lat , lon)

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
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
