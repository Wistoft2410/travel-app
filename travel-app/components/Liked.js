import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Liked = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Liked Screen</Text>
    </View>
  );
};

export default Liked;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
  },
});