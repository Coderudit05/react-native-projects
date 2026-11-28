import { Text, View } from "react-native";

const Me = () => {
  return (
    <View className="flex-1 items-center justify-center bg-white p-6">
      <Text className="text-3xl font-bold text-blue-600">Profile</Text>
      <Text className="mt-2 text-slate-600">Your Profile shows here</Text>
    </View>
  );
};

export default Me;
