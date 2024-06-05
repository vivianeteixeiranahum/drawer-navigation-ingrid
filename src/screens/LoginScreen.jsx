import React, { useState } from "react";
import { View, Text } from "react-native";
import { TextInput, Button } from "react-native-paper";
import { styles } from "../config/styles";

export default function LoginScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    if (!email.trim()) {
      setError("Por favor, digite seu email.");
      return;
    }
    if (!senha.trim()) {
      setError("Por favor, digite sua senha.");
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
    navigation.navigate("HomeScreen");
  };

  return (
    <View style={styles.container}>
      <View style={styles.container_inner}>
        <Text>Página de Login!</Text>
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
        <Text style={styles.error}>{error}</Text>
        <Button mode="contained" onPress={handleLogin}>
          Login
        </Button>
        <Button onPress={() => navigation.navigate("RegisterScreen")}>
          Fazer Cadastro
        </Button>
      </View>
    </View>
  );
}