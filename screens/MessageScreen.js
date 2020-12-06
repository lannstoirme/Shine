import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function MessageScreen() {
  return (
      <View>
      <Text>This is the messages screen</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
