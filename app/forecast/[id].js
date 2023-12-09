import { Stack, useRouter, useSearchParams } from "expo-router";
import { useCallback, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  ActivityIndicator,
  RefreshControl,
  Image,
} from "react-native";
import styles from "../../styles/forecast";
import { ScreenHeaderBtn } from "../../components";
import { COLORS, icons } from "../../constants";
import useFetch from "../../hook/useFetch";
import LottieView from "lottie-react-native";
import { CalendarDaysIcon } from "react-native-heroicons/outline";
import WeatherBox from "../../components/weatherBox/weatherBox";
import WeatherIcon from "../../components/weatherIcon/WeatherIcon";

const Forecast = () => {
  const params = useSearchParams();
  const router = useRouter();
  const { data, isLoading, error, refetch } = useFetch({
    id: params.id,
    days: 7,
  });

  //   const [activeTab, setActiveTab] = useState(tabs[0]);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    refetch();
    setRefreshing(false);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: COLORS.lightWhite },
          headerShadowVisible: false,
          headerBackVisible: false,
          headerLeft: () => (
            <ScreenHeaderBtn
              iconUrl={icons.left}
              dimension="60%"
              handlePress={() => router.back()}
            />
          ),
          headerRight: () => (
            <ScreenHeaderBtn iconUrl={icons.share} dimension="60%" />
          ),
          headerTitle: "",
        }}
      />

      <>
        <ScrollView
          showsVerticalScrollIndicator={false}
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }
        >
          {isLoading ? (
            <ActivityIndicator size="large" color={COLORS.primary} />
          ) : error ? (
            <Text>Something went wrong</Text>
          ) : data.length === 0 ? (
            <Text>No data available</Text>
          ) : (
            <View style={styles.container}>
              <View style={styles.smallContainer}>
                <Text style={styles.headline}>
                  {data.location.name},{" "}
                  <Text style={styles.smallHeadline}>
                    {data.location.country}
                  </Text>
                </Text>
              </View>
              <View style={styles.smallContainer}>
                <View style={{ width: 250, height: 250 }}>
                  <LottieView
                    style={{ flex: 1 }}
                    source={require("../../assets/Animations/partly-cloudy.json")}
                    autoPlay
                    loop
                  />
                </View>
              </View>
              <View style={{ marginBottom: 10 }}>
                <Text style={styles.degreeText}>
                  {" "}
                  {data.current.temp_c}&#176;
                </Text>
                <Text style={styles.textSmall}>
                  {" "}
                  {data.current.condition.text}{" "}
                </Text>
                <Text style={styles.text}>
                  The lat is {data.location.lat}, located in the{" "}
                  {data.location.region} region.{" "}
                </Text>
              </View>
              <View style={styles.imagesContainer}>
                <WeatherIcon
                  image={require("../../assets/icons/wind.png")}
                  text={data?.current.wind_kph}
                  degree={"kph"}
                />
                <WeatherIcon
                  image={require("../../assets/icons/drop.png")}
                  text={data?.current.humidity}
                  degree={"%"}
                />
                <WeatherIcon
                  image={require("../../assets/icons/sun.png")}
                  text={data?.current.gust_kph}
                  degree={"kph"}
                />
              </View>
              <View style={{ marginBottom: 10, padding: 5 }}>
                <View style={styles.dailyContainer}>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                      alignItems: "center",
                      marginBottom: 10,
                    }}
                  >
                    <CalendarDaysIcon size="22" color="white" />
                    <Text style={styles.textSmall}> Daily forecast</Text>
                  </View>
                  <View
                    style={{
                      display: "flex",
                      flexDirection: "row",
                    }}
                  >
                    <ScrollView
                      horizontal
                      contentContainerStyle={{
                        paddingHorizontal: 15,
                        width: "100%",
                        display: "flex",
                        justifyContent: "center",
                      }}
                      showHorizontalScrollIndicator={false}
                    >
                      {data?.forecast?.forecastday?.map((item, index) => {
                        let date = new Date(item.date);
                        let options = { weekdat: "long" };
                        let dayName = date.toLocaleDateString("en-US", options);
                        dayName = dayName.split(",")[0];
                        return (
                          <WeatherBox
                            day={dayName}
                            degree={item?.day?.avgtemp_c}
                          />
                        );
                      })}
                    </ScrollView>
                  </View>
                </View>
              </View>
            </View>
          )}
        </ScrollView>
      </>
    </SafeAreaView>
  );
};

export default Forecast;
