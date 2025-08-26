import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Switch,
} from "react-native";
import { Picker } from '@react-native-picker/picker';


export default function Dez() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confSenha, setConfSenha] = useState("");
  const [cargo, setCargo] = useState("Gestor");
  const [logado, setLogado] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>CADASTRO</Text>

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          placeholderTextColor="#ccc"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#ccc"
          secureTextEntry
          value={senha}
          onChangeText={setSenha}
        />

        <TextInput
          style={styles.input}
          placeholder="Confirmação da senha"
          placeholderTextColor="#ccc"
          secureTextEntry
          value={confSenha}
          onChangeText={setConfSenha}
        />

        <Picker
          selectedValue={cargo}
          style={styles.input}
          onValueChange={(itemValue) => setCargo(itemValue)}
        >
          <Picker.Item label="Gestor" value="Gestor" />
          <Picker.Item label="Manager" value="Manager" />
          <Picker.Item label="Funcionário" value="Funcionario" />
        </Picker>

        {/* Switch */}
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Manter-se conectado</Text>
          <Switch
            value={logado}
            onValueChange={setLogado}
            trackColor={{ false: "#e77878", true: "#94df83" }}
            thumbColor={logado ? "#47eb22" : "#ed1111"}
          />
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttonCadastrar}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonLogar}>
            <Text style={styles.buttonText}>Logar</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.footer}>
          {`${email || ''} - ${senha || ''} - ${confSenha || ''} - ${cargo || ''} - ${logado ? "sim" : "não"}`}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0C0C0C",
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    backgroundColor: "#1C1C1C",
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#fff",
    width: "85%",
  },
  title: {
    textAlign: "center",
    color: "#ADFF2F",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 20,
  },
  input: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 15,
  },
  switchLabel: {
    color: "#fff",
    marginRight: 10,
  },
  buttonRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonCadastrar: {
    backgroundColor: "#FFA500",
    padding: 12,
    borderRadius: 5,
    flex: 1,
    marginRight: 5,
    alignItems: "center",
  },
  buttonLogar: {
    backgroundColor: "#FF4500",
    padding: 12,
    borderRadius: 5,
    flex: 1,
    marginLeft: 5,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  footer: {
    marginTop: 15,
    color: "#fff",
    fontSize: 12,
    textAlign: "center",
  },
});
