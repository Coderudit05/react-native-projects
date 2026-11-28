import { View, Text } from "react-native";
import React from "react";

const Search = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white p-6">
      <Text className="text-3xl font-bold text-blue-600">Search</Text>
      <Text className="mt-2 text-slate-600">
        Your latest Search appear here.
      </Text>
    </View>
  );
};

export default Search;
