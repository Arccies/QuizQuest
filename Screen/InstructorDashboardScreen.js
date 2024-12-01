import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; // Import for icons
import InstructorSideNavModal from './InstructorSideNav'; // Import the SideNavModal
import styles from '../Style/DashboardStyle'; // Import the styles

const subjectData = [
  { name: 'ENGLISH', icon: require('../assets/circle.png') },
  { name: 'MATH', icon: require('../assets/circle.png') },
  { name: 'HISTORY', icon: require('../assets/circle.png') },
  // Add more subjects if necessary
];

const InstructorDashboard = () => {
  const [isModalVisible, setModalVisible] = useState(false); // State to control side nav visibility

  const openModal = () => setModalVisible(true); // Function to open the modal
  const closeModal = () => setModalVisible(false); // Function to close the modal

  return (
    <View style={styles.container}>
      {/* Menu Button at the top left */}
      <TouchableOpacity style={styles.menuButton} onPress={openModal}>
        <Ionicons name="menu" size={30} color="black" />
      </TouchableOpacity>

      <View style={styles.headerItems}>
        <Image source={require('../assets/books.png')} style={styles.headerIcon} />
        <Text style={styles.title}>SUBJECTS</Text>
      </View>

      <View style={styles.subjectContainer}>
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.buttonText} onPress={() => navigation.navigate('AddSubject')}>ADD SUBJECT</Text>
        </TouchableOpacity>
        <View style={styles.subjectList}>
          {subjectData.map((subject, index) => (
            <View key={index} style={styles.subjectItem}>
              <Image source={subject.icon} style={styles.subjectIcon} />
              <Text style={styles.subjectName}>{subject.name}</Text>
            </View>
          ))}
        </View>
      </View>

      {/* SideNav Modal */}
      <InstructorSideNavModal visible={isModalVisible} onClose={closeModal} />
    </View>
  );
};

export default InstructorDashboard;
