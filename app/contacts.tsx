import { View, Text, StyleSheet } from "react-native";
import { Colors } from "../constants/colors";

export default function Contacts() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contacts</Text>
      <Text style={styles.item}>Priya Kapoor</Text>
      <Text style={styles.item}>Anil Sharma</Text>
      <Text style={styles.item}>Meena Verma</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.bg, padding: 20 },
  title: { color: Colors.text, fontSize: 20 },
  item: { color: Colors.text, padding: 10, backgroundColor: "#111", marginTop: 10, borderRadius: 8 },
});
