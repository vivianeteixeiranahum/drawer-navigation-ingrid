import React, { useState } from "react";
import { View, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { styles } from "../config/styles";

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [repetirSenha, setRepetirSenha] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleRegister = () => {
    if (!email.trim()) {
      setError("Por favor, digite seu email.");
      return;
    }
    if (!senha.trim()) {
      setError("Por favor, digite sua senha.");
      return;
    }
    if (senha !== repetirSenha) {
      setError("As senhas digitadas não coincidem.");
      return;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Por favor, digite um email válido.");
      return;
    }
    if (senha.trim().length < 6) {
      setError("A senha deve ter pelo menos 6 caracteres.");
      return;
    }
    setTimeout(() => {
      setSuccess(true);
    }, 1000);
  };

  return (
    <View style={styles.container}>
      <View style={styles.container_inner}>
        <Text>Página de Registro!</Text>
        {success ? (
          <View>
            <Text style={styles.successMessage}>
              Registro feito com sucesso! Volte para o login.
            </Text>
            <Button onPress={() => navigation.navigate("LoginScreen")}>
              Voltar para Login
            </Button>
          </View>
        ) : (
          <>
            <TextInput
              label={"Email"}
              placeholder={"Digite seu e-mail"}
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              label={"Senha"}
              placeholder={"Digite sua Senha"}
              value={senha}
              onChangeText={setSenha}
              secureTextEntry
            />
            <TextInput
              label={"Repetir senha"}
              placeholder={"Repita sua senha"}
              value={repetirSenha}
              onChangeText={setRepetirSenha}
              secureTextEntry
            />
            <Text style={styles.error}>{error}</Text>
            <Button mode="contained" onPress={handleRegister}>
              Registrar
            </Button>
          </>
        )}
      </View>
    </View>
  );
}