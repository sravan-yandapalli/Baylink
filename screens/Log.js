
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get('window');

export default function Log() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/bk.png')} />
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Auth')}
      >
        <Text style={styles.buttonText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  button: {
    position: 'absolute',
    bottom: 50,
    width: width * 0.6, // 80% of the screen width
    height: 60, // larger height for the button
    backgroundColor: '#02AAE4', // button background color
    borderRadius: 10, // rounded corners
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff', // text color
    fontSize: 22, // text size
    fontWeight: 'bold',
  },
});
