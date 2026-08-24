import { useState } from 'react';
import { Text, View, TextInput, Pressable } from 'react-native';

export default function HomeScreen() {
  const [quantAlunos, setQuantAlunos] = useState('');
  const [quantGrupos, setQuantGrupos] = useState('');
  const [listaExcluidos, setListaExcluidos] = useState('');

  const formarGrupos = (qtdAlunos: string, qntGrupos: string, listaExcluidos: string) => {
    console.log('qtdAlunos,qntGrupos,listaExcluidos', qtdAlunos, qntGrupos, listaExcluidos);
  }

  const handleExcluidos = (text:string)=>{
    const listaNormatizada = text.replace(/[^0-9,]/g, '');
    setListaExcluidos(listaNormatizada);
    console.log('listaExcluidos', listaExcluidos);
    
  }

  return (
    <View className="flex-1 items-center bg-slate-900 p-4">
      <View className='bg-teal-500 rounded-xl p-4 w-full max-w-sm items-center mt-4'>
        <View className='flex-row gap-10'>
          <View>
            <Text className='text-slate-100 text-xl mt-4'>
              {'Quantos \n alunos?'}
            </Text>
            <TextInput
              className='bg-slate-950 mt-4 rounded-xl border border-slate-800 w-20 text-slate-100 text-xl text-center'
              cursorColor={'#f1f5f9'}
              maxLength={2}
              inputMode='numeric'
              value={quantAlunos}
              onChangeText={setQuantAlunos}
            />
          </View>
          <View >
            <Text className='text-slate-100 text-xl mt-4'>
              {'Quantos \n grupos?'}
            </Text>
            <TextInput
              className='bg-slate-950 mt-4 rounded-xl border border-slate-800 w-20 text-slate-100 text-xl text-center'
              cursorColor={'#f1f5f9'}
              maxLength={2}
              inputMode='numeric'
              value={quantGrupos}
              onChangeText={setQuantGrupos}
            />
          </View>
        </View>
        <Text className='text-slate-100 text-xl mt-8'>
          Excluir aluno ou alunos?
        </Text>
        <TextInput
          className='bg-slate-950 mt-4 rounded-xl border border-slate-800 w-full text-slate-100 text-xl text-center '
          cursorColor={'#f1f5f9'}
          keyboardType="numbers-and-punctuation"
          inputMode="text"
          placeholder='Separar por vírgula ex. 3,7,26'
          placeholderTextColor={'#94a3b8'}
          value={listaExcluidos}
          onChangeText={handleExcluidos}
        />
        <Pressable
          className='bg-slate-900 w-full h-16 mt-10 rounded-lg justify-center items-center'
          onPress={() => formarGrupos(quantAlunos, quantGrupos, listaExcluidos)}
        >
          <Text className='text-slate-100 font-bold text-xl '>Gerar Grupos</Text>
        </Pressable>
      </View>
    </View>
  );
}


