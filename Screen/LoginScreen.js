import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import styles from '../Style/LoginStyle'; // Import styles from the separate file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (email && password) {
      Alert.alert('Login Successful', `Welcome, ${email}!`);
    } else {
      Alert.alert('Error', 'Please enter both email and password.');
    }
  };

  return (
    <View style={styles.container}>
<Text style={styles.title}>Login</Text>

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
      <View style={{alignItems:"center"}}>
      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>Login</Text>
      </TouchableOpacity>
        
      <Text style={styles.footerText}>
        DON'T HAVE AN ACCOUNT?{' '}
        <Text style={styles.signUpText} onPress={() => navigation.navigate('Signup')}>REGISTER NOW</Text>
      </Text>
      </View>
    </View>
    </View>
  );
};

export default Login;
