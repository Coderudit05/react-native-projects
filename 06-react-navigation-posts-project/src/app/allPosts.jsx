import { Link } from "expo-router";
import { Text, View } from "react-native";

const AllPosts = () => {
  return (
    <View className="flex-1 bg-indigo-400 p-4">
      <Text className="text-black text-3xl font-bold">AllPosts</Text>
      <Link href="/posts/post">Click here to See All posts</Link>
    </View>
  );
};

export default AllPosts;
