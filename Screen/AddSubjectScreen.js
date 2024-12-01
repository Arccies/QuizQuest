import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from 'react-native';
import styles from '../Style/AddSubjectStyle'; // Import the separate styles

const AddSubject = () => {
  const [subjectName, setSubjectName] = useState('');
  const [subjectDescription, setSubjectDescription] = useState('');

  const handleAddSubject = () => {
    // Logic to add subject
    console.log('Subject Added: ', subjectName, subjectDescription);
  };

  const handleCancel = () => {
    // Logic to cancel the action and clear the inputs
    setSubjectName('');
    setSubjectDescription('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={require('../assets/books.png')} style={styles.icon} />
        <Text style={styles.title}>Subject</Text>
      </View>
      
      <View style={styles.profileSection}>
        <Image source={require('../assets/circle.png')} style={styles.profilePicture} />
        <Text style={{fontSize:24}}>Upload Photo</Text>
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Subject Name</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter Subject Name"
          value={subjectName}
          onChangeText={setSubjectName}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.label}>Subject Description</Text>
        <TextInput
          style={styles.input2}
          placeholder="Enter Subject Description"
          value={subjectDescription}
          onChangeText={setSubjectDescription}
        />
      </View>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.addButton} onPress={handleAddSubject}>
          <Text style={styles.buttonText}>Add Subject</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cancelButton} onPress={() => navigation.navigate('InstructorDashboard')}>
          <Text style={styles.buttonText}>Cancel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default AddSubject;
