import * as React from 'react';
import { Text, View, StyleSheet, Button, Alert } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import AssetExample from './components/AssetExample';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>
        Журнал Bright
      </Text>
      <Card>
        <AssetExample />
        <Text style={styles.aaa}>Превращаем стресс в своего помощника</Text>
        <Text style={styles.bbb}>Исследователи Йельского университета заявляют, что люди, которые рассматривают стресс, как возможность личностного роста , отмечают улучшение качества жизни. Сегодня узнаем, как это работает и как увидеть положительные стороны стресса</Text>
      </Card>
      <Button
        title="Читать далее"
        color='#841584'
        onPress={() => Alert.alert('Читать далее')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  aaa:{
    fontWeight: 'bold',
    marginLeft: 24,
    marginRight: 24,
    marginTop: 15,
    fontSize: 20,
    marginBottom: 20,

  },

  bbb: {
    
    marginLeft: 24,
    marginRight: 24,
    marginTop: 15,
    fontSize: 20,
    marginBottom: 20
  }
});
