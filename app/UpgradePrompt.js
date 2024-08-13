// UpgradePrompt.js
import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const UpgradePrompt = ({ onUpgrade, onClose }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>A new version of the app is available. Please upgrade to continue.</Text>
      <Button title="Upgrade" onPress={onUpgrade} />
      <Button title="Close" onPress={onClose} color="red" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
});

export default UpgradePrompt;
