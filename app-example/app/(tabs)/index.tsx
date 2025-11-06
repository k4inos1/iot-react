
import React, { useState } from 'react';
import { StyleSheet, TextInput, Button, Alert } from 'react-native';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { auth } from '@/firebaseConfig'; // Adjust the path as necessary
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in 
        const user = userCredential.user;
        Alert.alert("User Created!", `User ${user.email} was created.`);
      })
      .catch(error => {
        Alert.alert("Error", error.message);
      });
  };

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        // Signed in 
        const user = userCredential.user;
        Alert.alert("Logged In!", `Welcome back, ${user.email}!`);
      })
      .catch(error => {
        Alert.alert("Error", error.message);
      });
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Login or Sign Up</ThemedText>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <Button title="Sign Up" onPress={handleSignUp} />
      <Button title="Login" onPress={handleLogin} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    padding: 10,
    color: 'white',
  },
});
