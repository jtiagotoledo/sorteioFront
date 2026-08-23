import { StyleSheet, Text, View} from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>gfdgsg</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems:'center',
    flexDirection: 'row',
  }, 
  texto: {
    color:'white'
  }
  
});
