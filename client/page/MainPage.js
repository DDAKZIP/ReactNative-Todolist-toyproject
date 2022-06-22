import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ButtonBox from '../components/ButtonBox';
import Header from '../components/Header';
import InputBox from '../components/InputBox';

export default function MainPage() {
  return (
    <View style={styles.container}>
        <Header/>
        <View style={styles.main}>
            <Text>MainPage 입니다.</Text>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    main: {
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
  });