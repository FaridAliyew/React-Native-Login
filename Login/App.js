import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import Header from './components/Header/Header';
import Login from './components/Login/Login';
import OrContinue from './components/Orcontinue/OrContinue';


export default function App() {
  return (
    <View>
      <Header/>
      <Login/>
      <OrContinue/>
      <StatusBar style="auto" />
    </View>
  );
}
