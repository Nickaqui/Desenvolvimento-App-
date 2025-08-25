import { View, StyleSheet, Image, TouchableOpacity, Alert } from "react-native";
import Constants from "expo-constants";
import logo from "../assets/adaptive-icon.png";

export default function Cinco() {
  const handlePress = () => {
    Alert.alert("Boa noite!");
  };

  return (
    <View style={styles.container}>
      {/* Parte superior dividida em 2 colunas */}
      <View style={styles.top}>
        {/* Esquerda: Lime */}
        <View style={styles.left}>
          <TouchableOpacity onPress={handlePress}>
            <Image source={logo} style={styles.image} resizeMode="contain" />
          </TouchableOpacity>
        </View>

        {/* Direita dividida em 2 */}
        <View style={styles.right}>
          <View style={styles.teal}>
            <TouchableOpacity onPress={handlePress}>
              <Image source={logo} style={styles.image} resizeMode="contain" />
            </TouchableOpacity>
          </View>
          <View style={styles.skyblue}>
            <TouchableOpacity onPress={handlePress}>
              <Image source={logo} style={styles.image} resizeMode="contain" />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      {/* Parte inferior (Salmon) */}
      <View style={styles.bottom}>
        <TouchableOpacity onPress={handlePress}>
          <Image source={logo} style={styles.image} resizeMode="contain" />
        </TouchableOpacity>
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
    width: 64,   // tamanho fixo pedido
    height: 64,
  },
});
