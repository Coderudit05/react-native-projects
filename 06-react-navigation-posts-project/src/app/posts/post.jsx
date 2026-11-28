import { Link } from "expo-router";
import { Text, View } from "react-native";

const Post = () => {
  return (
    <View>
      <Text>All Posts</Text>
      <Link href="./1">First Post</Link>
      <Link href="./2">First Post</Link>
      <Link href="./3">First Post</Link>
      <Link href="./4">First Post</Link>
      <Link href="./5">First Post</Link>
    </View>
  );
};

export default Post;
