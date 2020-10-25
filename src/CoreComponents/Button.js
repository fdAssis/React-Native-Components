import React from 'react';
import { View, StyleSheet, Button, SafeAreaView, Text, Alert } from 'react-native';

const ButtonContent = () => (
  <SafeAreaView style={styles.container}>
    <View>
      <Text style={styles.title}>
        Um botao aqui
      </Text>

      <Button style={styles.buttonStyle}
        color="#1c2b2d"
        //disabled
        title="Clique"
        onPress={() => Alert.alert('Simple button pressed')}
      />
    </View>

    <View>
      <Text style={styles.title}>
        Left and Right buttons 
      </Text>
      <View style={styles.fixToText}>
        <Button
          title="Left button"
          color="#1f6f8b"
          onPress={() => Alert.alert('Left button pressed')}
        />
        <Button
          disabled
          title="Right button"
          color="#f05454"
          onPress={() => Alert.alert('Right button pressed')}
        />
      </View>
    </View>

  </SafeAreaView>
);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

export default ButtonContent;