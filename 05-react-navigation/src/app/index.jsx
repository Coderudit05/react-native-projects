import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center gap-4 bg-slate-900 p-6">
      <Text className="mb-2 text-3xl font-bold text-white">Home Page</Text>

      <Link href={"/Feed"} className="mb-2 text-3xl font-bold text-white">
        Feed
      </Link>
      <Link href={"/Search"} className="mb-2 text-3xl font-bold text-white">
        Search
      </Link>
      <Link href={"/Me"} className="mb-2 text-3xl font-bold text-white">
        Profile
      </Link>
      <Link
        href={"others/Privacy"}
        className="mb-2 text-3xl font-bold text-white"
      >
        Privacy
      </Link>
      <Link
        href={"others/Analysis"}
        className="mb-2 text-3xl font-bold text-white"
      >
        Analysis
      </Link>
    </View>
  );
}
