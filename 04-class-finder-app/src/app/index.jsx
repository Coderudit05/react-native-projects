import { useState } from "react";
import { FlatList, Text, TextInput, View } from "react-native";
import ClassCard from "../components/ClassCard";

const classes = [
  { id: "c1", subject: "JavaScript", room: 101 },
  { id: "c2", subject: "React Native", room: 204 },
  { id: "c3", subject: "Python", room: 305 },
  { id: "c4", subject: "React Basics", room: 102 },
];

export default function Index() {
  const [search, setSearch] = useState("");
  const query = search.trim().toLocaleLowerCase();

  const filteredClasses = classes.filter((item) =>
    item.subject.toLocaleLowerCase().includes(query),
  );
  return (
    <View className="flex-1 bg-white p-4">
      <Text className=" text-3xl font-bold ">Class Finder</Text>
      <TextInput
        placeholder="Search By Subject"
        value={search}
        onChangeText={setSearch}
        placeholderTextColor="#64748b"
        autoCapitalize="none"
        autoCorrect={false}
        className="my-4 rounded-xl border border-slate-300 px-4 py-3 text-slate-900"
      />
      <FlatList
        data={filteredClasses}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ClassCard subject={item.subject} room={item.room} />
        )}
        ListEmptyComponent={
          <Text className="text-slate-600">No classes found.</Text>
        }
      />
    </View>
  );
}
