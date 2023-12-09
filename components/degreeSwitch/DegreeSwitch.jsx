import React, { useState, useEffect } from "react";
import { View, Text } from "react-native";
import { Switch } from "react-native-switch";
import { storeData, getData } from "../../utils";
import { COLORS } from "../../constants";

export default function DegreeSwitch() {
  const [celOrFer, setCelOrFer] = useState(null);

  const getDataForDagree = async () => {
    await getData().then((data) => setCelOrFer(data));
  };

  useEffect(() => {
    getDataForDagree();
  }, [celOrFer]);

  return (
    <View style={{ display: "flex", alignItems: "center" }}>
      <Switch
        value={celOrFer}
        onValueChange={() => {
          storeData(!celOrFer);
          setCelOrFer(!celOrFer);
        }}
        disabled={false}
        activeText={`C°`}
        inActiveText={"F°"}
        backgroundActive={COLORS.darkBlue}
        backgroundInactive={COLORS.red}
        circleActiveColor={"white"}
        circleInActiveColor={"white"}
      />
    </View>
  );
}
