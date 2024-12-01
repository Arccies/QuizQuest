import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#C0FF72',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#228B22',
    marginBottom: 20,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  text: {
    color: '#000',
    fontSize: 18,
    marginBottom: 5,
    fontWeight: '600',
    paddingLeft:15,
    fontFamily: 'Gi'
  },
  input: {
    width: '100%',
    height: 50,
    borderColor: 'black',
    borderWidth: 4,
    borderRadius: 30,
    paddingHorizontal: 15,
    color: '#006400',
    fontSize: 16,
  },
  loginButton: {
    width: '70%',
    height: 50,
    backgroundColor: '#81A96A',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  loginButtonText: {
    color: '#FFF',
    fontSize: 35,
    fontWeight: 'bold',
  },
  footerText: {
    marginTop: 20,
    color: '#000000',
    fontSize: 14,
  },
  signUpText: {
    color: '#000',
    fontWeight: 'bold',
  },
});

export default styles;
