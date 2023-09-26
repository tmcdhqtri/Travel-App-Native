import { View, Text, Image } from "react-native";
import React from "react";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { TopBookings, TopInfo, TopTrips } from "../screens";
import { COLORS, SIZES } from "../constants/theme";
import {
  AppBar,
  HeightSpacer,
  NetworkImage,
  ReusableText,
} from "../components";
import styles from "./topTab.style";
const Tab = createMaterialTopTabNavigator();
// 005cd529-6606-4bb9-8d8f-9475bf308f67-vinci_
const TopTab = () => {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: COLORS.lightWhite }}>
        <View>
          <NetworkImage
            source={"https://images3.alphacoders.com/132/1329972.png"}
            width={"100%"}
            height={300}
            radius={0}
          />

          <AppBar
            top={40}
            left={20}
            right={20}
            color={COLORS.white}
            icon={"logout"}
            color1={COLORS.white}
            onPress1={() => console.log("Logout")}
          />

          <View style={styles.profile}>
            <Image
              source={{
                uri: "https://d326fntlu7tb1e.cloudfront.net/uploads/c87b6dfb-ee4b-47fa-9c02-6ccca2893a6f-vinci_06.jpg",
              }}
              style={styles.image}
            />

            <HeightSpacer height={5} />

              <View style={{ alignItems: "center" }}>
                <ReusableText
                  text={"King Andrew"}
                  family={"medium"}
                  size={SIZES.medium}
                  color={COLORS.black}
                />
              </View>

            <HeightSpacer height={5} />

            <View style={styles.name}>
              <View style={{ alignItems: "center" }}>
                <ReusableText
                  text={"kingandrew@gmail.com"}
                  family={"medium"}
                  size={SIZES.medium}
                  color={COLORS.white}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      <Tab.Navigator>
        <Tab.Screen name="Bookings" component={TopBookings} />
        <Tab.Screen name="Trips" component={TopTrips} />
        <Tab.Screen name="Info" component={TopInfo} />
      </Tab.Navigator>
    </View>
  );
};

export default TopTab;
