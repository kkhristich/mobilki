import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';

export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Новости
      </Text>
      <Image style={styles.logo} source={require('../assets/OIP.jpg')} 
      
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 12,
    color: 'blue',
    
  },
  logo: {
    height: 180,
    width: 290,
    alignSelf: "center",
  }
});
