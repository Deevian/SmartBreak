import React from "react";
import { TouchableOpacity, Text } from "react-native";

export const Secondary_btn = ({
  onPress,
  text,
  backgroundColor = "#07407B",
  borderColor = "#07407B",
  color = "white",
}) => {
  const style = {
    width: 100,
    paddingVertical: 5,
    backgroundColor,
    borderRadius: 8,
    alignItems: "center",
    borderWidth: 1,
    borderColor,
  };

  const textColor = {
    color,
  };

  return (
    <TouchableOpacity style={style} onPress={onPress} activeOpacity={0.8}>
      <Text style={textColor}>{text}</Text>
    </TouchableOpacity>
  );
};
