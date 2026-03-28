import { View, Text, StyleSheet, Switch } from "react-native";
import { Colors } from "../constants/colors";
import { useState } from "react";

export default function Settings() {
  const [voice, setVoice] = useState(true);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>

      <View style={styles.row}>
        <Text style={styles.text}>Voice Detection</Text>
        <Switch value={voice} onValueChange={setVoice} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: Colors.bg, padding: 20 },
  title: { color: Colors.text, fontSize: 20 },
  row: { flexDirection: "row", justifyContent: "space-between", marginTop: 20 },
  text: { color: Colors.text },
});
