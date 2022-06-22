import { Button, StyleSheet, Text, View } from 'react-native';
export default function ButtonBox({value}) {
    return (
      <View style={styles.buttonbox}>
        <Button color="coral" title ={value}></Button>
      </View>
    );
}

const styles = StyleSheet.create({
  buttonbox:{
    padding:20,
  }
})