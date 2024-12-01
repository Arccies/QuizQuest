import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Modal, Image, Animated } from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons'; // For icons
import styles from '../Style/SideNavStyle'; // Import the separate styles

const InstructorSideNavModal = ({ visible, onClose }) => {
  const slideAnim = useRef(new Animated.Value(-300)).current; // Initial position of side nav off-screen to the left

  useEffect(() => {
    if (visible) {
      // Slide in the side nav when modal is visible
      Animated.timing(slideAnim, {
        toValue: 0, // Final position on screen
        duration: 300, // Animation duration
        useNativeDriver: true,
      }).start();
    } else {
      // Slide out the side nav when modal is not visible
      Animated.timing(slideAnim, {
        toValue: -300, // Slide it out of the screen
        duration: 300, // Animation duration
        useNativeDriver: true,
      }).start();
    }
  }, [visible]);

  return (
    <Modal visible={visible} animationType="none" transparent={true}>
      <View style={styles.modalOverlay}>
        <Animated.View style={[styles.modalContainer, { transform: [{ translateX: slideAnim }] }]}>
          {/* Arrow-back icon */}
          <TouchableOpacity style={styles.backButton} onPress={onClose}>
            <Ionicons name="arrow-back" size={30} color="black" />
          </TouchableOpacity>

          <View style={styles.profileSection}>
            <Image
              source={require('../assets/circle.png')} // Profile picture from assets
              style={styles.profilePicture}
            />
            <Text style={styles.profileName}>John Doe</Text>
          </View>

          <View style={styles.navItems}>
            <TouchableOpacity style={styles.navItem} onPress={() => console.log('Navigate to Subjects')}>
              <Ionicons name="book" size={24} color="black" />
              <Text style={styles.navText}>Subjects</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItem} onPress={() => console.log('Navigate to Students')}>
              <FontAwesome name="user-graduate" size={24} color="black" />
              <Text style={styles.navText}>Students</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItem} onPress={() => console.log('Navigate to Rewards')}>
              <FontAwesome name="trophy" size={24} color="black" />
              <Text style={styles.navText}>Rewards</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.navItem} onPress={() => console.log('Logout')}>
              <Ionicons name="log-out" size={24} color="black" />
              <Text style={styles.navText}>Logout</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

export default InstructorSideNavModal;
