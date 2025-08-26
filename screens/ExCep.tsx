import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
} from "react-native";
import { getCep } from "../services/viaCepService";
import { useCep } from "../hooks/useCep";

export default function Excep() {
  const [cepInput, setCepInput] = useState("");
  const { data, setData } = useCep();

  const handleSearch = async () => {
    try {
      const result = await getCep(cepInput);
      setData(result);
      Keyboard.dismiss();
    } catch (error) {
      console.error("Erro ao buscar o CEP:", error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>CEP</Text>
      <TextInput
        placeholder="Digite o CEP"
        keyboardType="numeric"
        value={cepInput}
        onChangeText={setCepInput}
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={handleSearch}>
        <Text style={styles.buttonText}>Obter</Text>
      </TouchableOpacity>

      {data && (
        <View style={styles.result}>
          <Text style={styles.resultText}>
            Logradouro: {data.logradouro || ""}
          </Text>
          <Text style={styles.resultText}>
            Localidade: {data.localidade || ""}
          </Text>
          <Text style={styles.resultText}>UF: {data.uf || ""}</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121212",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    color: "#fff",
    marginBottom: 10,
  },
  input: {
    backgroundColor: "#fff",
    height: 40,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: "yellow",
    borderRadius: 5,
    alignItems: "center",
    paddingVertical: 10,
    marginBottom: 10,
  },
  buttonText: {
    fontWeight: "bold",
  },
  result: {
    marginTop: 10,
  },
  resultText: {
    color: "#fff",
  },
});
