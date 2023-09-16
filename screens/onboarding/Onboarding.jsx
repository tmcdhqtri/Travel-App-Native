import { StyleSheet, FlatList } from "react-native";
import React from "react";
import  Slides  from "../../components/Onboard/Slides";

const Onboarding = () => {
  const slides = [
    {
      id: 1,
      image: require("../../assets/images/1.png"),
      title: "Find the perfect place to stay",
    },
    {
      id: 2,
      image: require("../../assets/images/2.png"),
      title: "Discover the best places",
    },
    {
      id: 3,
      image: require("../../assets/images/3.png"),
      title: "Find the perfect hotel to stay",
    },
  ];
  return (
    <FlatList
      pagingEnabled
      horizontal
      showsHorizontalScrollIndicator={false}
      data={slides}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <Slides item={item} />}
    />
  );
};

export default Onboarding;
