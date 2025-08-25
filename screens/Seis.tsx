import { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";

export default function Seis() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [resultado, setResultado] = useState("");

  const salvar = () => {
    if (nome && idade) {
      setResultado(`${nome} - ${idade}`);
    } else {
      setResultado("Preencha todos os campos!");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome</Text>
      <TextInput
        style={styles.input}
        value={nome}
        onChangeText={setNome}
        placeholder="Digite seu nome"
      />

      <Text style={styles.label}>Idade</Text>
      <TextInput
        style={styles.input}
        value={idade}
        onChangeText={setIdade}
        placeholder="Digite sua idade"
        keyboardType="numeric"
      />

      <TouchableOpacity style={styles.button} onPress={salvar}>
        <Text style={styles.buttonText}>SALVAR</Text>
      </TouchableOpacity>

      {resultado ? <Text style={styles.result}>{resultado}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#222",
    padding: 20,
  },
  label: {
    color: "#fff",
    fontSize: 16,
    marginTop: 10,
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 10,
    marginTop: 5,
  },
  button: {
    backgroundColor: "#2196F3",
    padding: 12,
    borderRadius: 5,
    marginTop: 20,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  result: {
    color: "#fff",
    fontSize: 16,
    marginTop: 20,
  },
});
