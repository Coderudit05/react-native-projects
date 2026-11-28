import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  StyleSheet,
  Text,
  View,
} from "react-native";

const API = "https://randomuser.me/api/?results=10";

type Profile = {
  login: { uuid: string };
  picture: { medium: string };
  name: { first: string; last: string };
};

const ProfileGallery = () => {
  const [profiles, setProfiles] = useState<Profile[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let active = true;

    async function loadProfiles() {
      try {
        const res = await fetch(API);

        if (!res.ok) {
          throw new Error("Request failed");
        }

        const data = await res.json();

        if (!Array.isArray(data.results)) {
          throw new Error("Profiles missing");
        }

        if (active) {
          setProfiles(data.results);
        }
      } catch {
        if (active) {
          setError("Could not load profiles. Please try again later.");
        }
      } finally {
        if (active) {
          setLoading(false);
        }
      }
    }

    loadProfiles();

    return () => {
      active = false;
    };
  }, []);

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#2563eb" />
        <Text>Loading profiles...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text>{error}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={profiles}
      keyExtractor={(user) => user.login.uuid}
      contentContainerStyle={styles.gallery}
      ListHeaderComponent={<Text style={styles.heading}>Profile Gallery</Text>}
      renderItem={({ item }) => (
        <View style={styles.card}>
          <Image source={{ uri: item.picture.medium }} style={styles.photo} />
          <Text style={styles.name}>
            {item.name.first} {item.name.last}
          </Text>
        </View>
      )}
    />
  );
};

export default ProfileGallery;

const styles = StyleSheet.create({
  center: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 8,
    padding: 16,
  },
  gallery: {
    padding: 16,
    gap: 12,
  },
  heading: {
    fontSize: 24,
    fontWeight: "700",
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    gap: 12,
    padding: 12,
    backgroundColor: "#e5f2ff",
    borderRadius: 10,
  },
  photo: {
    width: 56,
    height: 56,
    borderRadius: 28,
  },
  name: {
    flex: 1,
    fontSize: 16,
  },
});
