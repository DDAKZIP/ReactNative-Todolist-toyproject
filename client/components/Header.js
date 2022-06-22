import { StyleSheet, Text, View } from 'react-native';
export default function Header() {
    return (
      <View style={styles.header}>
          <Text style={styles.title}>Todo List</Text>
      </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor:'coral',
        height:90,
        paddingTop:55,
        alignItems:'center',
    },

    title: {
        color:'white',
        fontSize:20,
        fontWeight:'bold',
    }

})