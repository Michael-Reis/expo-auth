import { Button, StyleSheet, TextInput, Text, View, TouchableOpacity } from "react-native";
import { useSession } from "./ctx";
import { router } from "expo-router";

export default function Login() {
  const { signIn } = useSession();
  const handleLogin = () => {
    router.replace("/");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome! </Text>
      <Text style={styles.paragraph}>
        Enter your credentials to continue.
      </Text>
      <View style={styles.separator} />
      <TextInput placeholder="Username" placeholderTextColor="#888" style={styles.input} />
      <TextInput
        placeholder="Password"
        placeholderTextColor="#888"
        secureTextEntry
        style={styles.input}
      />
      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#f3f4f6",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#3b82f6",
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    color: "#6b7280",
    textAlign: "center",
    marginBottom: 30,
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
    backgroundColor: "#e5e7eb",
  },
  input: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#d1d5db",
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 8,
    marginBottom: 15,
    fontSize: 16,
    color: "#111827",
  },
  button: {
    width: "80%",
    backgroundColor: "#3b82f6",
    padding: 15,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
