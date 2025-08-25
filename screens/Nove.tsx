import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker';

export default function App() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmaSenha, setConfirmaSenha] = useState('');
  const [perfil, setPerfil] = useState('manager');
  const handleCadastro = () => {
    console.log('Cadastro:', email, senha, confirmaSenha, perfil);
  };

  const handleLogin = () => {
    console.log('Login com:', email, senha);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.title}>CADASTRO</Text>

        <TextInput
          style={styles.input}
          placeholder="E-mail"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />

        <TextInput
          style={styles.input}
          placeholder="Confirmação de senha"
          value={confirmaSenha}
          onChangeText={setConfirmaSenha}
          secureTextEntry
        />

        {/* Picker para escolher o perfil */}
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={perfil}
            onValueChange={(itemValue) => setPerfil(itemValue)}
            style={styles.picker}
          >
            <Picker.Item label="Administrador" value="admin" />
            <Picker.Item label="Gestor" value="manager" />
            <Picker.Item label="Usuário" value="user" />
          </Picker>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttonCadastrar} onPress={handleCadastro}>
            <Text style={styles.buttonText}>Cadastrar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.buttonLogar} onPress={handleLogin}>
            <Text style={styles.buttonText}>Logar</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.result}>
          {email} - {senha} - {confirmaSenha} - {perfil}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C0C0C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    width: '85%',
    backgroundColor: '#1E1E1E',
    padding: 20,
    borderRadius: 10,
    alignItems: 'center',
  },
  title: {
    color: '#FFD700',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  input: {
    width: '100%',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
  },
  pickerContainer: {
    width: '100%',
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 10,
  },
  picker: {
    width: '100%',
    height: 50,
  },
  buttonRow: {
    flexDirection: 'row',
    marginTop: 10,
  },
  buttonCadastrar: {
    backgroundColor: '#FFB300',
    padding: 10,
    borderRadius: 5,
    marginRight: 10,
  },
  buttonLogar: {
    backgroundColor: '#FF6F00',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  result: {
    marginTop: 15,
    color: '#fff',
    fontSize: 12,
  },
});
