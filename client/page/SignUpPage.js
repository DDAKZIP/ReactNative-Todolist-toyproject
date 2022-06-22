import { StyleSheet, Text, View } from 'react-native';
import ButtonBox from '../components/ButtonBox';
import Header from '../components/Header';
import InputBox from '../components/InputBox';
export default function SignUpPage({navigation}) {
    return (
      <View style={[styles.container, {flexDirection:'column'},{flex:1}]}>
        <Header/>
        <View style={[styles.signuplayout, {flexDirection:'column'},{flex:1}]}>
            <View style={[styles.titlelayout, {flex:1}]}>
                <Text style={styles.title}>회원가입</Text>
                <Text style={styles.content}>todo list의 다양한 서비스를 이용해보세요.</Text>
            </View>
            <View style ={[styles.signupinput, {flex:2}]}>
                <InputBox value="이름"/>
                <InputBox value="이메일"/>
                <InputBox value="비밀번호"/>
                <InputBox value="비밀번호 확인"/>
                <ButtonBox value="가입하기"/>
            </View>
        </View>
      </View>
    );
}

const styles = StyleSheet.create({
    signuplayout: {
        alignItems: 'center',
    },
    titlelayout: {
        alignItems:'center',
        justifyContent:'center',
    },  
    title: {
        paddingTop:40,
        fontSize:25,
        fontWeight:'bold',
    },
    content:{
        padding:20,
        fontSize:15,
    },
    signupinput: {
        justifyContent:'center',
    }
})