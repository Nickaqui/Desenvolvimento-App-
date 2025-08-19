import { View, StyleSheet } from "react-native";
import Constants from "expo-constants";

export default function Tres() {
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.left} />
        <View style={styles.right}>
          <View style={styles.teal} />
          <View style={styles.skyblue} />
        </View>
      </View>
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
    flexDirection: "row", 
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
    flexDirection: "column", 
  },
  teal: {
    flex: 0.5,
    backgroundColor: "teal",
  },
  skyblue: {
    flex: 0.5,
    backgroundColor: "skyblue",
  },
});
