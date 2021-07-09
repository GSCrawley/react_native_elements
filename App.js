import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Image } from 'react-native';
// import { Avatar } from 'react-native-elements';
import LinearProgress from 'react-native-elements/dist/linearProgress/LinearProgress';
LinearProgress;

export default function App() {
  return (
  <SafeAreaProvider>
    
      <Image source={require('./images/banksy.jpeg')} 
              style={{ width: 300, height: 300, borderRadius:150,
                        margin: 80}}/>
    
    </SafeAreaProvider>
  );
}

