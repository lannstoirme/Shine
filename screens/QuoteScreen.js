import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function QuoteScreen() {
  return (
      <View>
      <Text>This is the quote screen</Text>
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
