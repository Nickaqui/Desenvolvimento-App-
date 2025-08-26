import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { useCep } from "../hooks/useCep";

export default function HistoricoCep() {
  const { historico } = useCep();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Consultas de CEP</Text>
      <ScrollView style={styles.scrollView}>
        {historico.map((item, index) => (
          <View key={index} style={styles.card}>
            <Text style={styles.cardText}>Logradouro: {item.logradouro}</Text>
            <Text style={styles.cardText}>Localidade: {item.localidade}</Text>
            <Text style={styles.cardText}>UF: {item.uf}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 20,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  scrollView: {
    flex: 1,
  },
  card: {
    backgroundColor: "#1f1f1f",
    padding: 10,
    borderRadius: 6,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#444",
  },
  cardText: {
    color: "#fff",
  },
});
