import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ButtonBox from '../components/ButtonBox';
import Header from '../components/Header';
import InputBox from '../components/InputBox';

export default function LoginPage({navigation}) {
  return (
    <View style={styles.container}>
        <Header/>
        <View style = {[styles.loginlayout,{flexDirection:'column'},{flex:1}]}>
            <View style ={[styles.titlelayout, {flex:5}]}>
                <Text style={styles.title}>로그인</Text>
            </View>
            <View style = {[styles.authinput, {flex:3}]}>
                <InputBox value ="ID"/>
                <InputBox value ="PassWord"/>
            </View>
            <View style = {[styles.authbutton,{flex:2}]}>
                <ButtonBox value = "Login" onPress={() => navigation.navigate('Main')}/>
                <ButtonBox value = "Sign Up" onPress={() => navigation.navigate('Signup')}/>
            </View>
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    title: {
        paddingTop:40,
        fontSize:25,
        fontWeight:'bold',
    },
    titlelayout:{
        justifyContent:'center',
        alignItems:'center',
    },
    authinput: {
        alignItems: 'center',
        justifyContent:'flex-end',
    },
    authbutton: {
        flexDirection: "row",
        justifyContent: 'center',
    }
});