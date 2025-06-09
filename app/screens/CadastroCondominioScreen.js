import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

export default function CadastroCondominioScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={ fontSize: 24 }>CadastroCondominioScreen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20
  }
});
