import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";

export default function Dois() {
  return (
    <View style={styles.container}>
      {/* Parte superior dividida */}
      <View style={styles.top}>
        <View style={styles.left} />
        <View style={styles.right} />
      </View>

      {/* Parte inferior */}
      <View style={styles.bottom} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    paddingTop: Constants.statusBarHeight,
  },
  top: {
    flex: 0.5,
    backgroundColor: "crimson",
    flexDirection: "row", // divide em linha
  },
  bottom: {
    flex: 0.5,
    backgroundColor: "salmon",
  },
  left: {
    flex: 0.5,
    backgroundColor: "lime",
  },
  right: {
    flex: 0.5,
    backgroundColor: "aquamarine",
  },
});
