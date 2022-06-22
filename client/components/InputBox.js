import { StyleSheet, Text, TextInput, View } from 'react-native';
export default function InputBox({value}) {
    return (
      <View style={styles.inputbox}>
        <TextInput style={styles.hint} placeholder={value}></TextInput>
      </View>
    );
}

const styles = StyleSheet.create({
    inputbox: {
      width:250,
      padding:15,
      marginTop:16,
      borderRadius: 10,
      borderColor:'#bbb',
      borderStyle:'dashed',
      borderWidth:1,
    },

})