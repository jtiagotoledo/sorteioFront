import { useState } from 'react';
import { Text, View, TextInput } from 'react-native';

export default function HomeScreen() {
  const [quantAlunos, setQuantAlunos] = useState('');
  const [quantGrupos, setQuantGrupos] = useState('');
  return (
    <View className="flex-1 items-center justify-center bg-slate-900 p-4">
      <View className='bg-emerald-400 rounded-xl p-4 w-full max-w-sm items-center'>
        <Text className='text-slate-100 text-2xl mt-8'>
          Quantos alunos?
        </Text>
        <TextInput
          className='bg-slate-700 mt-4 rounded-xl border border-slate-600 w-16 text-slate-100 text-xl text-center'
          cursorColor={'#f1f5f9'}
          maxLength={2}
          inputMode='numeric'
          value={quantAlunos}
          onChangeText={setQuantAlunos}
        />
        <Text className='text-slate-100 text-2xl mt-8'>
          Quantos grupos?
        </Text>
        <TextInput
          className='bg-slate-700 mt-4 rounded-xl border border-slate-600 w-16 text-slate-100 text-xl text-center'
          cursorColor={'#f1f5f9'}
          maxLength={2}
          inputMode='numeric'
          value={quantGrupos}
          onChangeText={setQuantGrupos}
        />
      </View>
    </View>
  );
}


