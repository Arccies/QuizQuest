import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C0FF72',
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'center',
  },
  icon: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  title: {
    fontSize: 44,
    fontWeight: 'bold',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  label: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  input: {
    backgroundColor: '#FFF',
    padding: 10,
    borderColor: 'black',
    borderWidth: 4,
    borderRadius: 30,
    fontSize: 16,
  },
  input2: {
    backgroundColor: '#FFF',
    padding: 10,
    borderColor: 'black',
    borderWidth: 4,
    borderRadius: 30,
    fontSize: 16,
    height:200,
    textAlignVertical: 'top', // Aligns text to the top
    textAlign: 'left', // Optional, if you want to specify horizontal alignment
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  addButton: {
    backgroundColor: '#81A96A',
    padding: 10,
    borderRadius: 8,
    width: '48%',
    alignItems: 'center',
  },
  cancelButton: {
    backgroundColor: '#F44336',
    padding: 10,
    borderRadius: 8,
    width: '48%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});

export default styles;
