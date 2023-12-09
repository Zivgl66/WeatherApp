import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, View } from "react-native";
import { Stack, useRouter, useSearchParams } from "expo-router";
import { Text, SafeAreaView } from "react-native";
import axios from "axios";
import { API_KEY } from "@env";
import { ScreenHeaderBtn } from "../../components";
import { COLORS, icons, SIZES } from "../../constants";
import styles from "../../styles/search";
import CityBox from "../../components/cityBox/CityBox";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { sortArray } from "../../utils";

const JobSearch = () => {
  const params = useSearchParams();
  const router = useRouter();
  const [searchResult, setSearchResult] = useState([]);
  const [searchLoader, setSearchLoader] = useState(false);
  const [searchError, setSearchError] = useState(null);
  const [isChecked, setIsChecked] = useState(false);

  const handleSearch = async () => {
    setSearchLoader(true);
    setSearchResult([]);
    setSearchError(null);

    try {
      const options = {
        method: "GET",
        url: `https://api.weatherapi.com/v1/search.json?key=${API_KEY}&q=${params.id}`,
      };

      const response = await axios.request(options);
      if (response.data.length > 0) {
        setSearchResult(response.data);
        setSearchError(null);
      } else {
        setSearchError("No results found...");
      }
    } catch (error) {
      setSearchError(error);
      console.log(error);
    } finally {
      setSearchLoader(false);
    }
  };

  useEffect(() => {
    handleSearch();
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerTitle: "",
        }}
      />

      <FlatList
        data={searchResult}
        renderItem={({ item }) => (
          <CityBox
            location={item}
            handleNavigate={() =>
              router.push({
                pathname: `/forecast/${item.id}`,
              })
            }
          />
        )}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ padding: SIZES.medium, rowGap: SIZES.medium }}
        ListHeaderComponent={() => (
          <>
            <View style={styles.container}>
              <View style={styles.searchHeader}>
                <View style={styles.smallContainer}>
                  <Text style={styles.searchTitle}>{params.id}</Text>
                  <Text style={styles.noOfSearchedJobs}>Results:</Text>
                </View>
                <View style={styles.checkboxContainer}>
                  <View>
                    <Text>A-Z</Text>
                    <BouncyCheckbox
                      size={20}
                      fillColor="blue"
                      iconStyle={{ borderColor: "blue" }}
                      innerIconStyle={{ borderWidth: 2 }}
                      isChecked={isChecked}
                      onPress={() => {
                        setIsChecked(!isChecked);
                        sortArray(searchResult, isChecked);
                      }}
                    />
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.loaderContainer}>
              {searchLoader ? (
                <ActivityIndicator size="large" color={COLORS.primary} />
              ) : searchError != null ? (
                <Text style={styles.noOfSearchResults}>No Results Found</Text>
              ) : null}
            </View>
          </>
        )}
      />
    </SafeAreaView>
  );
};

export default JobSearch;
