import { View, StyleSheet, Image } from "react-native";
import Constants from "expo-constants";

export default function Quatro() {
  return (
    <View style={styles.container}>

      <View style={styles.top}>

        <View style={styles.left}>
          <Image source={require("../assets/adaptive-icon.png")} style={styles.image} resizeMode="contain" />
        </View>


        <View style={styles.right}>
          <View style={styles.teal}>
            <Image source={require("../assets/adaptive-icon.png")} style={styles.image} resizeMode="contain" />
          </View>
          <View style={styles.skyblue}>
            <Image source={require("../assets/adaptive-icon.png")} style={styles.image} resizeMode="contain" />
          </View>
        </View>
      </View>


      <View style={styles.bottom}>
        <Image source={require("../assets/adaptive-icon.png")} style={styles.image} resizeMode="contain" />
      </View>
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
    alignItems: "center",
    justifyContent: "center",
  },
  left: {
    flex: 0.5,
    backgroundColor: "lime",
    alignItems: "center",
    justifyContent: "center",
  },
  right: {
    flex: 0.5,
    flexDirection: "column",
  },
  teal: {
    flex: 0.5,
    backgroundColor: "teal",
    alignItems: "center",
    justifyContent: "center",
  },
  skyblue: {
    flex: 0.5,
    backgroundColor: "skyblue",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "80%", 
    height: "80%",
    alignSelf: "center",
  },
});
