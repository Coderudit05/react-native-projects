import { StyleSheet, Text, View } from "react-native";

const classes = [
  { id: "c1", subject: "JavaScript", room: 101 },
  { id: "c2", subject: "React Native", room: 204 },
  { id: "c3", subject: "Python", room: 305 },
];

const index = () => {
  return (
    <View style={{ padding: 10 }}>
      {classes.map((item) => (
        <Text key={item.id}>
          {item.subject} - Room {item.room}
        </Text>
      ))}
    </View>
  );
};

export default index;

const styles = StyleSheet.create({});
