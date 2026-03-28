import { View, Text, StyleSheet, Animated } from "react-native";
import { useEffect, useRef } from "react";

export default function MicComponent() {
  const scale = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scale, {
          toValue: 1.2,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, []);

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.micRing, { transform: [{ scale }] }]}>
        <Text style={styles.micIcon}>🎤</Text>
      </Animated.View>

      <Text style={styles.status}>● LISTENING</Text>

      <Text style={styles.subText}>
        Say "Help", "Emergency", or "Call an ambulance"
      </Text>

      <View style={styles.waveContainer}>
        {[...Array(7)].map((_, i) => (
          <View key={i} style={styles.waveBar} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginTop: 40,
  },
  micRing: {
    width: 90,
    height: 90,
    borderRadius: 50,
    backgroundColor: "rgba(226,75,74,0.2)",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  micIcon: {
    fontSize: 30,
  },
  status: {
    backgroundColor: "#1e3d1e",
    color: "#3B6D11",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 20,
    fontSize: 12,
    marginBottom: 10,
  },
  subText: {
    color: "#aaa",
    fontSize: 12,
    textAlign: "center",
    marginBottom: 10,
  },
  waveContainer: {
    flexDirection: "row",
    gap: 4,
  },
  waveBar: {
    width: 4,
    height: 20,
    backgroundColor: "#E24B4A",
    borderRadius: 2,
  },
});
