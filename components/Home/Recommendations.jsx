import {
  FlatList,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import fetchRecommendations from "../../hook/fetchRecommendations";
import HorizontalShimmer from "../Shimmers/HorizontalShimmer";
import reusable from "../Reusable/reusable.style";
import ReusableTile from "../Reusable/ReusableTile";
import ReusableText from "../Reusable/ReusableText";
import { TEXT, COLORS, SIZES } from "../../constants/theme";
import { Feather } from "@expo/vector-icons";

const Recommendations = () => {
  const navigation = useNavigation();
  const { recommendations, isLoading, error, refetch } =
    fetchRecommendations(1);

  if (isLoading) {
    return (
      <HorizontalShimmer
        horizontal={true}
        width={"100%"}
        height={100}
        radius={12}
        paddingTop={15}
      />
    );
  }

  return (
    <View style={styles.container}>
      <FlatList
        data={recommendations}
        horizontal
        keyExtractor={(item) => item._id}
        contentContainerStyle={{ columnGap: SIZES.medium }}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => (
          <ReusableTile
            item={item}
            onPress={() => navigation.navigate("PlaceDetails", item._id)}
          />
        )}
      />
    </View>
  );
};

export default Recommendations;

const styles = StyleSheet.create({
  container: {
    paddingTop: 20,
  },
});
