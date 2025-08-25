import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";

export default function Exercicio8() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmar, setConfirmar] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>CADASTRO</Text>

        <Text style={styles.label}>E-mail</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu e-mail"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <Text style={styles.label}>Confirmação da senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Confirme sua senha"
          placeholderTextColor="#aaa"
          secureTextEntry
          value={confirmar}
          onChangeText={setConfirmar}
        />

        <View style={styles.buttonRow}>
          <TouchableOpacity style={[styles.button, styles.cadastro]}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.button, styles.login]}>
            <Text style={styles.buttonText}>Logar</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.footer}>ana@teste.com - 123456 - 123456</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1e1e1e",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#2a2a2a",
    borderRadius: 8,
    padding: 20,
    width: 270,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#c9a30e",
    textAlign: "center",
    marginBottom: 20,
  },
  label: {
    fontSize: 14,
    color: "#fff",
    marginBottom: 5,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 8,
    color: "#fff",
    marginBottom: 15,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 5,
  },
  button: {
    flex: 1,
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    marginHorizontal: 5,
  },
  cadastro: {
    backgroundColor: "#c9930e",
  },
  login: {
    backgroundColor: "#444",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  footer: {
    marginTop: 15,
    fontSize: 12,
    textAlign: "center",
    color: "#ccc",
  },
});
