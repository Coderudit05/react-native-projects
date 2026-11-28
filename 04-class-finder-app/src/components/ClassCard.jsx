import { View, Text } from "react-native";
import React from "react";

const ClassCard = ({ subject, room }) => {
  return (
    <View className="mb-3 rounded-xl bg-blue-50 p-4">
      <Text className="text-xl font-bold text-slate-900">{subject}</Text>
      <Text className="text-base text-slate-600">Room {room}</Text>
    </View>
  );
};

export default ClassCard;
