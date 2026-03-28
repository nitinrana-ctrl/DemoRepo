import { View, Text, StyleSheet, Pressable } from "react-native";
import { useRouter } from "expo-router";
import { Colors } from "../constants/colors";

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>SEVDRS</Text>
      <Text style={styles.sub}>Voice Guard Active</Text>

      <View style={styles.mic}>
        <Text style={{ fontSize: 30 }}>🎤</Text>
      </View>

      <Text style={styles.listen}>Listening...</Text>

      <Pressable style={styles.button} onPress={() => router.push("/trigger")}>
        <Text style={styles.btnText}>Simulate Emergency</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.bg, alignItems: "center", justifyContent: "center" },
  title: { color: Colors.text, fontSize: 24, fontWeight: "bold" },
  sub: { color: Colors.subText, marginBottom: 20 },
  mic: { width: 100, height: 100, borderRadius: 50, backgroundColor: "#111", alignItems: "center", justifyContent: "center", marginBottom: 20 },
  listen: { color: Colors.green, marginBottom: 20 },
  button: { backgroundColor: Colors.red, padding: 12, borderRadius: 10 },
  btnText: { color: "#fff", fontWeight: "600" },
});
