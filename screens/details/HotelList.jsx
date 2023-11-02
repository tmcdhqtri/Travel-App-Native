import { View, Text, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import AppBar from "../../components/Reusable/AppBar";
import { COLORS, SIZES } from "../../constants/theme";
import ReusableTile from "../../components/Reusable/ReusableTile";
import fetchHotels from "../../hook/fetchHotel";
import { ActivityIndicator } from "react-native-paper";
import HorizontalShimmer from "../../components/Shimmers/HorizontalShimmer";

const HotelList = ({ navigation }) => {
  const { hotels, isLoading, error, refetch } =fetchHotels();
  return (
    <SafeAreaView style={{ marginHorizontal: 20 }}>
      <View style={{ height: 50 }}>
        <AppBar
         top={10}
         left={0}
         right={0}
          title={"Nearby Hotels"}
          color={COLORS.white}
          icon={"search1"}
          color1={COLORS.white}
          onPress={()=> navigation.goBack()}
          onPress1={()=> navigation.navigate('HotelSearch')}
        />
      </View>

      {isLoading ? 
      ( <HorizontalShimmer
        horizontal={false}
        width={'100%'}
        height={95}
        radius={12}
        paddingTop={12}
      />)
      
      : (
        <View style={{ paddingTop: 20 }}>
        <FlatList
          data={hotels}
          keyExtractor={(item) => item._id}
          renderItem={({ item }) => (
            <View style={{ marginBottom: 10 }}>
              <ReusableTile
                item={item}
                onPress={() => navigation.navigate("HotelDetails", item._id)}
              />
            </View>
          )}
        />
      </View>
      )}
    </SafeAreaView>
  );
};

export default HotelList;
