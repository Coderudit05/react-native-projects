import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

const PostDetails = () => {
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>PostDetails</Text>
      <Text>Post Id : {id}</Text>
    </View>
  );
};

export default PostDetails;
