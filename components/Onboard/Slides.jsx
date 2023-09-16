import { View, Text, Image } from "react-native";
import React from "react";
import styles from "./slides.style";
import { ReusableText } from "../../components/index";
import { COLORS, SIZES } from "../../constants/theme";

const Slides = ({ item }) => {
  return (
    <View>
      <Image source={item.image} style={styles.image} />

      <View style={styles.stack}>
        <ReusableText
          text={item.title}
          family={"medium"}
          size={SIZES.xxLarge}
          color={COLORS.white}
        />
      </View>
    </View>
  );
};

export default Slides;
