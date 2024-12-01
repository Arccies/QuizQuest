import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import styles from '../Style/SignUpStyle'; // Assuming you have custom styles

const Signup = ({ navigation }) => {
  // Define state variables
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // Handle the login action (you can customize this as needed)
  const handleLogin = () => {
    // Logic for handling login, for example:
    console.log("User logged in");
    // You can navigate to the next screen here, e.g.:
    // navigation.navigate('Home');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sign Up</Text>

      {/* User name */}
      <View style={styles.inputContainer}>
        <Text style={styles.text}>USERNAME</Text>
        <TextInput
          style={styles.input}
          placeholder="Username"
          placeholderTextColor="#9ACD32"
          value={userName}
          onChangeText={setUserName}
          autoCapitalize="none"
        />
      </View>

      {/* Email Label and TextInput */}
      <View style={styles.inputContainer}>
        <Text style={styles.text}>EMAIL</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#9ACD32"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />
      </View>

      {/* Password Label and TextInput */}
      <View style={styles.inputContainer}>
        <Text style={styles.text}>PASSWORD</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          placeholderTextColor="#9ACD32"
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
      </View>

      {/* SignUp Button */}
      <View style={{ alignItems: 'center' }}>
        <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
          <Text style={styles.loginButtonText}>Sign Up</Text>
        </TouchableOpacity>

        <Text style={styles.footerText}>
          ALREADY HAVE AN ACCOUNT?{' '}
          <Text style={styles.signUpText} onPress={() => navigation.navigate('Login')}>
            LOGIN NOW
          </Text>
        </Text>
      </View>
    </View>
  );
};

export default Signup;
