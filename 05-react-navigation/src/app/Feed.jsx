import { Text, View } from "react-native";

export default function FeedScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-white p-6">
      <Text className="text-3xl font-bold text-blue-600">Feed</Text>
      <Text className="mt-2 text-slate-600">
        Your latest posts appear here.
      </Text>
    </View>
  );
}
