import { Link } from "expo-router";
import { Text, View } from "react-native";
import "../../global.css";

const Index = () => {
  return (
    <View className="flex-1 bg-black items-center justify-center">
      <Text className="text-white text-xl">Home Page</Text>

      <Link href="/feed" className="text-white text-xl ">
        Go to Feed
      </Link>
      <Link href="profile" className="text-white text-xl">
        Go to Profile
      </Link>
      <Link href="/about" className="text-white text-xl">
        Go to About
      </Link>

      {/* Dynamic Routes */}
      <Link href="/allPosts" className="text-white text-xl">
        Go to All Posts
      </Link>
    </View>
  );
};

export default Index;
