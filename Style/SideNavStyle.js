import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    justifyContent: 'flex-start', // Align the modal to the top
    alignItems: 'flex-start', // Align the side nav to the left
    position: 'absolute', // Make sure it covers the entire screen
    left: 0,
    top: 0,
    bottom: 0,
    right: 0,
  },
  modalContainer: {
    backgroundColor: '#FFFFFF',
    width: 250, // Set width of the side nav
    height: '100%', // Full screen height
    borderRadius: 10,
    padding: 20,
    position: 'absolute', // Position it on the left side
    left: 0,
    top: 0,
    bottom: 0,
  },
  backButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    zIndex: 1, // Make sure it's on top of other elements
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 30,
  },
  profilePicture: {
    width: 100,
    height: 100,
    borderRadius: 50, // Circular profile picture
    marginBottom: 10,
  },
  profileName: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  navItems: {
    width: '100%',
  },
  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  navText: {
    fontSize: 16,
    marginLeft: 10,
  },
});

export default styles;
