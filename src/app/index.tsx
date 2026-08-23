import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';

export default function HomeScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-slate-100 p-4">
      <View className="bg-slate-800 p-6 rounded-2xl border border-slate-700 w-full max-w-sm">
        <Text className="text-white text-xl font-bold text-center">
          React Native + NativeWind
        </Text>
        <Text className="text-slate-400 text-sm text-center mt-2">
          Estilização rápida com classes utilitárias no mobile.
        </Text>
        <TouchableOpacity className="mt-4 bg-emerald-500 py-3 rounded-xl active:bg-emerald-600">
          <Text className="text-white font-semibold text-center">Clique Aqui</Text>
        </TouchableOpacity>
      </View>
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
