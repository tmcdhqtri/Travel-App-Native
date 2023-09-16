import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { COLORS, SIZES } from "../../constants/theme";

const ReusableBtn = ({
  btntext,
  onPress,
  textColor,
  width,
  backgroundColor,
  borderWidth,
  borderColor,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.btnStyle(width, backgroundColor, borderWidth, borderColor)}
    >
      <Text style={styles.btnText(textColor)}>{btntext}</Text>
    </TouchableOpacity>
  );
};

export default ReusableBtn;

const styles = StyleSheet.create({
  btnText: (textColor) => ({
    fontFamily: "medium",
    fontSize: SIZES.medium,
    color: textColor,
  }),
  btnStyle: (width, backgroundColor, borderWidth, borderColor) => ({
    width: width,
    backgroundColor: backgroundColor,
    alignItems: "center",
    justifyContent: "center",
    height: 45,
    borderRadius: SIZES.small,
    borderWidth: borderWidth,
    borderColor: borderColor,
  }),
});
