
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, ScrollView } from "react-native";

export default function App() {
  const botoes = ["Um","Dois","Três","Quatro","Cinco","Seis","Sete","Oito","Nove","Dez"];

  return (
    <View style={styles.container}>
      
      <Image
        source={require("../assets/fatec.png")} 
        style={styles.logo}
      />

      <Text style={styles.title}>HOME</Text>

     
      <View style={styles.grid}>
        {botoes.map((texto, index) => (
          <TouchableOpacity key={index} style={styles.button}>
            <Text style={styles.buttonText}>{texto}</Text>
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
