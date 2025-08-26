import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../types";

type Props = NativeStackScreenProps<RootStackParamList, "Onze">;

export default function Onze({ navigation }: Props) {
  const botoes = [
    "Um",
    "Dois",
    "Tres",
    "Quatro",
    "Cinco",
    "Seis",
    "Sete",
    "Oito",
    "Nove",
    "Dez",
  ];

  return (
    <View style={styles.container}>
      <Image source={require("../assets/fatec.png")} style={styles.logo} />
      <Text style={styles.title}>HOME</Text>

      <View style={styles.grid}>
        {botoes.map((nome) => (
          <TouchableOpacity
            key={nome}
            style={styles.button}
            onPress={() => navigation.navigate(nome as any)}
          >
            <Text style={styles.buttonText}>{nome}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5E5",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  logo: {
    width: 140,
    height: 140,
    marginBottom: 20,
    resizeMode: "contain",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#f5a000",
    width: 120,
    height: 50,
    margin: 8,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 6,
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
  },
});
