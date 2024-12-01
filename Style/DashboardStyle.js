import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C0FF72', // Background color
    padding: 16,
  },
  headerItems: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    justifyContent: 'center',
  },
  headerIcon: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subjectContainer: {
    flex: 1,
    marginTop: 20,
  },
  addButton: {
    backgroundColor: '#81A96A', // Add button style
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginBottom: 16,
    alignItems: 'center',
    width: "40%",
    paddingLeft: 20
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  subjectList: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  subjectItem: {
    alignItems: 'center',
    marginBottom: 20,
    width: '48%', // Two items per row (adjust width to fit)
    justifyContent: 'center',
  },
  subjectIcon: {
    width: 80,
    height: 80,
    borderRadius: 40, // Circular icon style
    marginBottom: 10,
  },
  subjectName: {
    fontSize: 18,
    fontWeight: '600',
    textAlign: 'center',
  },
  buttonContainer:{
    paddingLeft:20
  },
  menuButton: {
    position: 'absolute', // Positioning for the top-left corner
    top: 20,
    left: 20,
    zIndex: 1, // Ensure the menu button is above other elements
  },
});

export default styles;
