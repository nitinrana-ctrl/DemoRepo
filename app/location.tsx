import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../constants/colors";

export default function Location() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>📍 Live Location</Text>
      <View style={styles.map}></View>
      <Text style={styles.text}>Sharing with responders...</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.bg, padding: 20 },
  title: { color: Colors.text, fontSize: 18, marginBottom: 10 },
  map: { height: 200, backgroundColor: "#222", borderRadius: 10 },
  text: { color: Colors.subText, marginTop: 10 },
});
