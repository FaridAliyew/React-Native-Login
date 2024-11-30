import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Header from './components/Header/Header';
import Login from './components/Login/Login';


export default function App() {
  return (
    <View>
      <Header/>
      <Login/>



      {/* <StatusBar style="auto" /> */}
    </View>
  );
}
